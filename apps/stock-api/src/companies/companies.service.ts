/* eslint-disable @typescript-eslint/no-unused-vars */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Prisma, Company } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}
  // create(createCompanyDto: CreateCompanyDto) {
  //   return 'This action adds a new company';
  // }

  async findAll() {
    try {
      const companies = await this.prisma.company.findMany();
      const reports = await this.prisma.report.findMany({
        distinct: ['companyId'],
        orderBy: {
          date: 'desc',
        },
      });

      return {
        companies,
        reports: reports.map((report) => ({
          ...report,
          sharesAmount: report.sharesAmount.toString(), // to avoid JSON stringify BigInt error
        })),
      };
    } catch (error: unknown) {
      throw new HttpException(
        'Błąd pobierania firm',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} company`;
  // }

  // update(id: number, updateCompanyDto: UpdateCompanyDto) {
  //   return `This action updates a #${id} company`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} company`;
  // }
}
