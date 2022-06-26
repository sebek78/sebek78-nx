import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from '../auth/local-auth-guard';
import { AuthService } from '../auth/auth.service';
import { AppService } from './app.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtRefreshGuard } from '../auth/refresh-auth-guard';
import { RequestWithUserData, RequestWithUser } from '../types/types';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(
    @Req() req: RequestWithUserData,
    @Res({ passthrough: true }) response: Response
  ) {
    const { user } = req;
    const tokens = await this.authService.createTokens(user, true);

    response.setHeader('Set-Cookie', tokens);
    return { user };
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/logout')
  async logout(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) response: Response
  ) {
    const { user } = req;
    const tokens = await this.authService.createLogoutCookie(user.id);

    response.setHeader('Set-Cookie', tokens);
    return { success: true };
  }

  @UseGuards(JwtRefreshGuard)
  @Get('auth/refresh-tokens')
  async regenerateTokens(
    @Req() req: RequestWithUserData,
    @Res({ passthrough: true }) response: Response
  ) {
    const { user } = req;
    const tokens = await this.authService.createTokens(user, false);

    response.setHeader('Set-Cookie', tokens);
    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getData() {
    return this.appService.getData();
  }
}
