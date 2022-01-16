/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Controller()
export class MeetingsController {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column({ type: String, nullable: true })
  zoomUrl: string;
}
