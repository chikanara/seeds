import { Employee } from 'src/routes/employees/entities/employee.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meetings')
export class Meeting {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column()
  zoomUrl: string;
  @ManyToMany(() => Employee, (employee) => employee.meetings)
  employees: Employee[];
}
