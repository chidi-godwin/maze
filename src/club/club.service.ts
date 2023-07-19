import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubRepository } from './club.dao';

@Injectable()
export class ClubService {
  constructor(private readonly clubRepository: ClubRepository) {}

  async create(createClubDto: CreateClubDto) {
    return this.clubRepository.create(createClubDto);
  }

  async findAll() {
    return this.clubRepository.findAll();
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
