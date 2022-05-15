import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

export type UserData = Pick<User, 'id' & 'username' & 'role'>;

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

  async getJwtToken(user: UserData) {
    const payload = { ...user };

    return this.jwtService.sign(payload);
  }
}
