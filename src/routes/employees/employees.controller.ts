import { Controller, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller()
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Post('employees')
  seedData() {
    return this.employeesService.seed();
  }
}
