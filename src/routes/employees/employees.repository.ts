import { Employee } from 'src/routes/employees/entities/employee.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {}
