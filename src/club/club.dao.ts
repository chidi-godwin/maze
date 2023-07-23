import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClubRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: any) {
    return this.prismaService.club.create({ data });
  }

  async count(where: any) {
    return this.prismaService.club.count({ where });
  }

  async findAll(take: number, skip: number, orderBy: any, where: any) {
    return this.prismaService.club.findMany({
      where,
      take,
      skip,
      orderBy,
    });
  }

  async searchTitle(title: string) {
    return this.prismaService.club.findMany({
      where: {
        title: {
          search: title,
        },
      },
      orderBy: {
        _relevance: {
          fields: ['title'],
          search: title,
          sort: 'desc',
        },
      },
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
