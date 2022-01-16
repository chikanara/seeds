import { ContactInfo } from './entities/contact-info.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ContactInfo)
export class ContactRepository extends Repository<ContactInfo> {}
