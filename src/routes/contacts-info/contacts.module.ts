import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactRepository } from './contacts.repository';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContactRepository])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
