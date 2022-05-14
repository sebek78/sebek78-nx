import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';

export type UserRowData = Omit<User, 'password'>;

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<UserRowData> {
    const user = await this.usersService.findOneByName(username);
    // TODO: check password
    if (user /*&& user.password === pass*/) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }
}
