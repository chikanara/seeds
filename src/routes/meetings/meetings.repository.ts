import { Meeting } from 'src/routes/meetings/entities/meeting.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Meeting)
export class MeetingsRepository extends Repository<Meeting> {}
