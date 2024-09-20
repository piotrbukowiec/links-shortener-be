import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { ICreateLinkDto } from 'src/types/link';

export class CreateLinkDto implements ICreateLinkDto {
  @ApiProperty({
    type: 'string',
    example: 'https://onet.pl',
    description: 'Full link to shorten',
  })
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;
}
