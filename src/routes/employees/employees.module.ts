import { MeetingsRepository } from './../meetings/meetings.repository';
import { ContactRepository } from './../contacts-info/contacts.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';
import { EmployeesService } from './employees.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from '../tasks/tasks.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmployeesRepository,
      ContactRepository,
      TasksRepository,
      MeetingsRepository,
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
