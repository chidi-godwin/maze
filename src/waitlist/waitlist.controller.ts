import { Controller, Get, Post, Body } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Waitlist')
@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @ApiOperation({
    summary: 'Create a new waitlist entry',
    description: 'Add new email to the waitlist',
  })
  @Post()
  create(@Body() createWaitlistDto: CreateWaitlistDto) {
    return this.waitlistService.create(createWaitlistDto);
  }

  @ApiOperation({
    summary: 'Get all waitlist entries',
    description: 'Get all emails in the waitlist',
  })
  @Get()
  findAll() {
    return this.waitlistService.findAll();
  }
}
