import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { ErrorMessages, PrismaErrors } from '../prisma/prisma-helpers';
import { UpdateRefreshToken } from '../types/types';
import { DeleteUserDTO } from './dto/delete-user.dto';

const saltOrRounds = 10; // bcrypt

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.password2) {
      throw new HttpException(
        'Hasła nie są identyczne',
        HttpStatus.BAD_REQUEST
      );
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds
    );
    const data: Prisma.UserCreateInput = {
      username: createUserDto.username,
      password: hashedPassword,
      createOn: new Date(),
    };
    try {
      const { username } = await this.prisma.user.create({
        data,
      });

      return {
        username,
      };
    } catch (error) {
      if (error?.code === PrismaErrors.UniqueConstraintFailed) {
        throw new HttpException(
          ErrorMessages[PrismaErrors.UniqueConstraintFailed],
          HttpStatus.BAD_REQUEST
        );
      }
      throw new HttpException(
        'Błąd serwera.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOneByName(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  async findOneById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateRefreshToken(id: number, updateUserDto: UpdateRefreshToken) {
    const query: Prisma.UserUpdateArgs = {
      where: {
        id,
      },
      data: {
        refreshToken: updateUserDto.refreshToken,
        refreshExpiresIn: updateUserDto.refreshExpiresIn,
      },
    };

    if (updateUserDto.lastLogin) query.data.lastLogin = updateUserDto.lastLogin;

    return this.prisma.user.update(query);
  }

  async removeRefreshToken(id: number) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        refreshToken: null,
        refreshExpiresIn: null,
      },
    });
  }

  async updatePassword(
    user: User,
    updateUserPasswordDto: UpdateUserPasswordDto
  ) {
    let isPasswordMatching = false;

    if (
      updateUserPasswordDto.newPassword !== updateUserPasswordDto.newPassword2
    ) {
      throw new HttpException(
        'Hasła nie są identyczne',
        HttpStatus.BAD_REQUEST
      );
    }

    isPasswordMatching = await bcrypt.compare(
      updateUserPasswordDto.oldPassword,
      user.password
    );

    if (isPasswordMatching) {
      const hashedNewPassword = await bcrypt.hash(
        updateUserPasswordDto.newPassword,
        saltOrRounds
      );
      return this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hashedNewPassword,
        },
      });
    } else {
      throw new BadRequestException('Password is invalid.');
    }
  }

  async deleteUser(user: User, deleteUserDto: DeleteUserDTO) {
    if (user.username !== deleteUserDto.username) {
      throw new HttpException('Zła nazwa użytkownika', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.user.delete({
      where: {
        username: deleteUserDto.username,
      },
    });
  }
}
