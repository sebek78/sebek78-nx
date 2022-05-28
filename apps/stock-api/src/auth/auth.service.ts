import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateRefreshToken } from '../users/dto/update-user.dto';
import { EXPIRES_IN, REFRESH_TIME } from './auth.module';

export type UserData = Pick<User, 'id' | 'username' | 'role'>;

const generateString = (length: number): string =>
  Array(length)
    .fill('')
    .map(() => Math.random().toString(36).charAt(2))
    .join('');

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
    // TODO: expire validation
    if (refreshToken === user.refreshToken) {
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
      refreshToken: generateString(16),
    };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: `${REFRESH_TIME}s`,
    });
    const userDataToUpdate: UpdateRefreshToken = {
      // TODO: update token expiration and last login
      refreshToken: token,
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
