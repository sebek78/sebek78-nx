import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { UserData } from './helpers';

type TokenPayload = UserData & { iat: number; exp: number };

@Injectable()
export class RefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token'
) {
  constructor(private authService: AuthService) {
    super({
      ignoreExpiration: true,
      passReqToCallback: true,
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const authToken = request.cookies?.Authentication;
          const refreshToken = request.cookies?.Refresh;
          if (!authToken || !refreshToken) {
            return null;
          }
          return authToken;
        },
      ]),
    });
  }

  async validate(request: Request, payload: TokenPayload) {
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
