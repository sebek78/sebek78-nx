import { Controller, Post, Body, Patch, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestWithUser } from '../types/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/new-password')
  update(
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
    @Req() req: RequestWithUser
  ) {
    const { user } = req;

    return this.usersService.updatePassword(user.id, updateUserPasswordDto);
  }
}
