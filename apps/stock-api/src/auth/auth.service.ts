import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateRefreshToken } from '../users/dto/update-user.dto';
import { EXPIRES_IN, REFRESH_TIME } from './auth.module';
import { compareDate, generateRandomString, UserData } from './helpers';

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
      const { id, username, role } = user;
      return { id, username, role };
    }
  }

  async getJwtToken(user: UserData) {
    const payload = { ...user };

    return this.jwtService.sign(payload);
  }

  async getRefreshToken(userId: number) {
    const payload = {
      refreshToken: generateRandomString(16),
    };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: `${REFRESH_TIME}s`,
    });

    const eightHours = Date.now() + 8 * 60 * 60 * 1000;
    const userDataToUpdate: UpdateRefreshToken = {
      // TODO: update last login
      refreshToken: token,
      refreshExpiresIn: new Date(eightHours),
    };

    await this.usersService.updateRefreshToken(userId, userDataToUpdate);
    return userDataToUpdate.refreshToken;
  }

  async createTokens(user: UserData) {
    const accessToken = await this.getJwtToken(user);
    const refreshToken = await this.getRefreshToken(user.id);

    const authCookie = `Authentication=${accessToken}; HttpOnly; Path=/; Max-Age=${EXPIRES_IN}`;
    const refreshCookie = `Refresh=${refreshToken}; HttpOnly; Path=/; Max-Age=${REFRESH_TIME}`;

    return [authCookie, refreshCookie];
  }
}
