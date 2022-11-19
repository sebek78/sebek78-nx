/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  // @Post()
  // create(@Body() createCompanyDto: CreateCompanyDto) {
  //   return this.companiesService.create(createCompanyDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const companies = await this.companiesService.findAll();

    return companies;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.companiesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
  //   return this.companiesService.update(+id, updateCompanyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companiesService.remove(+id);
  // }
}
