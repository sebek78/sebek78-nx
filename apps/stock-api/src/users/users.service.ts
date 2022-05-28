import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateRefreshToken, UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ErrorMessages, PrismaErrors } from '../prisma/prisma-helpers';

const saltOrRounds = 10; // bcrypt

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
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

  async updateRefreshToken(id: number, updateUserDto: UpdateRefreshToken) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        refreshToken: updateUserDto.refreshToken,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
