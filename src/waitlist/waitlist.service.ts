import { Injectable } from '@nestjs/common';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { WaitlistRepository } from './waitlist.dao';

@Injectable()
export class WaitlistService {
  constructor(private readonly waitlistRepository: WaitlistRepository) {}
  create(createWaitlistDto: CreateWaitlistDto) {
    return this.waitlistRepository.create(createWaitlistDto);
  }

  findAll() {
    return this.waitlistRepository.findAll();
  }
}
