import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateWaitlistDto {
  @IsEmail()
  @ApiProperty({
    description: 'Email of the user',
    example: 'user@example',
  })
  email: string;
}
