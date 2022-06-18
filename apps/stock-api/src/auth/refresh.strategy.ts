import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { RefreshTokenPayload } from '../types/types';

@Injectable()
export class RefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token'
) {
  constructor(private authService: AuthService) {
    super({
      ignoreExpiration: true,
      passReqToCallback: true,
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const refreshToken = request.cookies?.Refresh;

          if (!refreshToken) return null;

          return refreshToken;
        },
      ]),
    });
  }

  async validate(request: Request, payload: RefreshTokenPayload) {
    const refreshToken: string = request.cookies?.Refresh;
    const user = await this.authService.validateRefreshToken(
      refreshToken,
      payload.username
    );

    if (!user) {
      throw new BadRequestException('Token expired');
    }

    return user;
  }
}
