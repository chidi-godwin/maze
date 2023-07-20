import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClubRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: any) {
    return this.prismaService.club.create({ data });
  }

  async findAll(take, skip, orderBy, where) {
    return this.prismaService.club.findMany({
      where,
      take,
      skip,
      orderBy,
    });
  }

  async findOne(id: number) {
    return this.prismaService.club.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prismaService.club.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prismaService.club.delete({ where: { id } });
  }
}
