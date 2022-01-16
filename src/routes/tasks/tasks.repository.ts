import { Task } from 'src/routes/tasks/entities/task.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {}
