import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WaitlistRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: any) {
    try {
      return this.prismaService.waitlist.create({ data });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return this.prismaService.waitlist.findMany({});
  }
}
