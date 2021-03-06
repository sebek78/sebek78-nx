import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserData } from '../types/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserData> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new BadRequestException('Nieprawidłowe dane logowania');
    }

    return user;
  }
}
