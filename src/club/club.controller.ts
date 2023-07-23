import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ClubsQuery } from './dto/get-clubs.dto';

@ApiTags('Club')
@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @ApiOperation({ summary: 'Create a club' })
  @Post()
  async create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  @ApiOperation({ summary: 'Get all clubs' })
  @Get()
  async findAll(@Query() query: ClubsQuery) {
    return this.clubService.findAll(query);
  }

  @ApiOperation({ summary: 'Get a club by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clubService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a club by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubService.update(+id, updateClubDto);
  }

  @ApiOperation({ summary: 'Delete a club by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.clubService.remove(+id);
  }

  @ApiOperation({ summary: 'Search a club by title' })
  @Get('search/:title')
  async searchTitle(@Param('title') title: string) {
    return this.clubService.searchTitle(title);
  }
}
