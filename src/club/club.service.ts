import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubRepository } from './club.dao';
import { ClubsQuery } from './dto/get-clubs.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClubService {
  constructor(private readonly clubRepository: ClubRepository) {}

  async create(createClubDto: CreateClubDto) {
    return this.clubRepository.create(createClubDto);
  }

  async findAll(query: ClubsQuery) {
    const { limit, page, orderBy, rating, category } = query;

    let skip = 0;
    let take = 10;
    const orderByObj = orderBy ? { createdAt: orderBy } : { createdAt: 'desc' };

    if (page && limit) {
      skip = (page - 1) * limit;
      take = limit;
    } else if (limit) {
      take = limit;
    } else if (page) {
      skip = (page - 1) * 10;
    }

    let where: Prisma.ClubWhereInput;

    if (rating && category) {
      where = {
        AND: [{ rating }, { category }],
      };
    } else if (rating) {
      where = {
        rating,
      };
    } else if (category) {
      where = {
        category,
      };
    }

    return this.clubRepository.findAll(take, skip, orderByObj, where);
  }

  async findOne(id: number) {
    return this.clubRepository.findOne(id);
  }

  async update(id: number, updateClubDto: UpdateClubDto) {
    return this.clubRepository.update(id, updateClubDto);
  }

  async remove(id: number) {
    return this.clubRepository.remove(id);
  }
}
