import { Module } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { WaitlistController } from './waitlist.controller';
import { WaitlistRepository } from './waitlist.dao';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WaitlistController],
  providers: [WaitlistService, WaitlistRepository],
  imports: [PrismaModule],
})
export class WaitlistModule {}
