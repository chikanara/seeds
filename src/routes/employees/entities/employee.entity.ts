import { ContactInfo } from './../../contacts-info/entities/contact-info.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from 'src/routes/tasks/entities/task.entity';
import { Meeting } from 'src/routes/meetings/entities/meeting.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column()
  name: string;

  @ManyToOne(() => Employee, (manager) => manager.directReports, {
    onDelete: 'SET NULL',
  })
  manager: Employee;
  @OneToMany(() => Employee, (directiveReport) => directiveReport.manager)
  directReports: Employee[];
  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;
  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];
  @ManyToMany(() => Meeting, (meeting) => meeting.employees)
  @JoinTable()
  meetings: Meeting[];
}
