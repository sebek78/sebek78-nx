import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CompaniesModule } from '../companies/companies.module';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule, AuthModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
