import { Employee } from 'src/routes/employees/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column()
  name: string;
  @ManyToOne(() => Employee, (employee) => employee.tasks, {
    onDelete: 'SET NULL',
  })
  employee: Employee;
}
