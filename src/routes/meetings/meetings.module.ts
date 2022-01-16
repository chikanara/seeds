import { MeetingsRepository } from './meetings.repository';
import { MeetingsService } from './meetings.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsController } from './meetings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingsRepository])],
  controllers: [MeetingsController],
  providers: [MeetingsService],
})
export class MeetingsModule {}
