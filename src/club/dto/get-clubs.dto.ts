import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class ClubsQuery {
  @ApiProperty({
    description: 'The Club rating',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  rating?: number;

  @ApiProperty({
    description: 'The Club Category',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  category?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty({
    description: 'The page of the requests',
    required: false,
  })
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty({
    description: 'The limit of the requests',
    required: false,
  })
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiProperty({
    description: 'The order of the requests',
    enum: ['asc', 'desc'],
  })
  orderBy?: string;
}
