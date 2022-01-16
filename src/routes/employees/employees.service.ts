import { MeetingsRepository } from './../meetings/meetings.repository';
import { ContactRepository } from './../contacts-info/contacts.repository';
import { EmployeesRepository } from './employees.repository';
import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../tasks/tasks.repository';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly employeeRepository: EmployeesRepository,
    private readonly contactInfoRepo: ContactRepository,
    private readonly tasksRepository: TasksRepository,
    private readonly meetingsRepository: MeetingsRepository,
  ) {}
  async seed() {
    //employee 1 CEO
    const ceo = this.employeeRepository.create({ name: 'Mr.CEO' });
    await this.employeeRepository.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({
      email: 'user@email.com',
      // employeeId: ceo.id,
    });
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);

    // employee 2  manager
    const manager = this.employeeRepository.create({
      name: 'Maryus',
      manager: ceo,
    });
    // add tasks
    const task1 = this.tasksRepository.create({
      name: 'hire people',
    });
    await this.tasksRepository.save(task1);
    const task2 = this.tasksRepository.create({
      name: 'present to ceo',
    });
    await this.tasksRepository.save(task2);

    // assign tasks to manager
    manager.tasks = [task1, task2];

    // add meeting
    const meeting1 = this.meetingsRepository.create({ zoomUrl: 'meeting.com' });
    meeting1.employees = [ceo];

    await this.meetingsRepository.save(meeting1);

    manager.meetings = [meeting1];
    await this.employeeRepository.save(manager);
  }

  getEmployeeById(id: number) {
    // return this.employeeRepository.findOne(id, {
    //   relations: ['manager', 'tasks', 'contactInfo', 'meetings'],
    // });
    return this.employeeRepository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.directReports', 'directReports')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.tasks', 'tasks')
      .where('employee.id = :employeeId', { employeeId: id })
      .getOne();
  }

  deleteEmployee(id: number) {
    return this.employeeRepository.delete(id);
  }
}
