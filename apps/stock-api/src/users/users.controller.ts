import {
  Controller,
  Post,
  Body,
  Patch,
  Req,
  UseGuards,
  Delete,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestWithUser } from '../types/types';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/new-password')
  async update(
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
    @Req() req: RequestWithUser
  ) {
    const { user } = req;

    await this.usersService.updatePassword(user, updateUserPasswordDto);

    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  async delete(
    @Body() deleteUserDto: DeleteUserDTO,
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) response: Response
  ) {
    const { user } = req;
    await this.usersService.deleteUser(user, deleteUserDto);

    const tokens = [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
    response.setHeader('Set-Cookie', tokens);

    return { success: true };
  }
}
