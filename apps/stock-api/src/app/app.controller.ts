import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from '../auth/local-auth-guard';
import { AuthService, UserData } from '../auth/auth.service';
import { AppService } from './app.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: UserData;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) response: Response
  ) {
    const { user } = req;
    const accessToken = await this.authService.getJwtToken(user);

    const secretData = {
      accessToken,
      // TODO: refreshToken
      refreshToken: '',
    };

    response.cookie('tokens', secretData, { httpOnly: true });
    return { user };
  }

  @Get('auth/logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    // TODO: remove refreshToken from db

    res.cookie('tokens', '', { expires: new Date() });
    return {
      success: true,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getData() {
    return this.appService.getData();
  }
}
