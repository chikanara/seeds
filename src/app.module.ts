import { TasksModule } from './routes/tasks/tasks.module';
import { MeetingsModule } from './routes/meetings/meetings.module';
import { EmployeesModule } from './routes/employees/employees.module';
import { ContactsModule } from './routes/contacts-info/contacts.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TasksModule,
    MeetingsModule,
    EmployeesModule,
    ContactsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
