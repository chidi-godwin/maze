import {
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
  MinLength,
} from 'class-validator';

export class CreateClubDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  address: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  rating?: number;

  @IsString()
  @IsOptional()
  category?: string;

  @IsUrl()
  logo?: string;

  @IsUrl()
  website?: string;

  @IsString()
  html_logo?: string;

  @IsString()
  keyword: string;

  @IsString()
  location: string;
}
