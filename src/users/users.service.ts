import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userUserRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userUserRepository.find();
  }

  findOne(u_id: number): Promise<User | null> {
    return this.userUserRepository.findOneBy({ u_id });
  }

  async remove(u_id: number): Promise<void> {
    await this.userUserRepository.delete(u_id);
  }
}
