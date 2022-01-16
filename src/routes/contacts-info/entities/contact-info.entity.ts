import { Employee } from 'src/routes/employees/entities/employee.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('contacts-info')
export class ContactInfo {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column({ nullable: true })
  phone: string;
  @Column()
  email: string;
  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  employee: Employee;
}
