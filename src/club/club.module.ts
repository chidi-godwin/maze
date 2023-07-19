import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ClubRepository } from './club.dao';

@Module({
  controllers: [ClubController],
  providers: [ClubService, ClubRepository],
  imports: [PrismaModule],
})
export class ClubModule {}
