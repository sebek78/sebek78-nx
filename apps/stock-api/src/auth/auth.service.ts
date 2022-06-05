import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { EXPIRES_IN, REFRESH_TIME } from './auth.module';
import { compareDate, generateRandomString } from './helpers';
import { UpdateRefreshToken, UserData } from '../types/types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<UserData> {
    const user = await this.usersService.findOneByName(username);
    let isPasswordMatching = false;

    if (user) {
      isPasswordMatching = await bcrypt.compare(password, user.password);

      if (isPasswordMatching) {
        const { id, username, role } = user;
        return { id, username, role };
      }
    }

    return null;
  }

  async validateRefreshToken(refreshToken: string, username: string) {
    const user = await this.usersService.findOneByName(username);
    const { refreshExpiresIn } = user;
    const now = new Date();
    const notExpired = compareDate(refreshExpiresIn, now);

    if (refreshToken === user.refreshToken && notExpired) {
      const userData: UserData = {
        id: user.id,
        username: user.username,
        role: user.role,
      };
      return userData;
    }
  }

  async getJwtToken(user: UserData) {
    const payload = { ...user };

    return this.jwtService.sign(payload);
  }

  async getRefreshToken(userId: number, isLogin: boolean) {
    const payload = {
      refreshToken: generateRandomString(16),
    };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: `${REFRESH_TIME}s`,
    });

    const eightHours = Date.now() + 8 * 60 * 60 * 1000;
    const userDataToUpdate: UpdateRefreshToken = {
      refreshToken: token,
      refreshExpiresIn: new Date(eightHours),
    };

    if (isLogin) userDataToUpdate.lastLogin = new Date();

    await this.usersService.updateRefreshToken(userId, userDataToUpdate);
    return userDataToUpdate.refreshToken;
  }

  async createTokens(user: UserData, isLogin: boolean) {
    const accessToken = await this.getJwtToken(user);
    const refreshToken = await this.getRefreshToken(user.id, isLogin);

    const authCookie = `Authentication=${accessToken}; HttpOnly; Path=/; Max-Age=${EXPIRES_IN}`;
    const refreshCookie = `Refresh=${refreshToken}; HttpOnly; Path=/; Max-Age=${REFRESH_TIME}`;

    return [authCookie, refreshCookie];
  }

  async createLogoutCookie(id: number) {
    await this.usersService.removeRefreshToken(id);
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }
}
