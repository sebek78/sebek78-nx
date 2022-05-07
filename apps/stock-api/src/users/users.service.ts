import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

const saltOrRounds = 10; // bcrypt
const defaultRole = ['user'].toString();

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
      role: defaultRole,
      create_on: new Date(),
    };

    const {
      id,
      role,
      username,
      refresh_token: refreshToken,
    } = await this.prisma.user.create({ data });

    // TODO: return data
    console.log(id, role, username, refreshToken);

    return 'This action adds a new user';
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