import { IsNotEmpty, IsUrl } from 'class-validator';
import { ICreateLinkDto } from 'src/types/link';

export class CreateLinkDto implements ICreateLinkDto {
  @IsNotEmpty() @IsUrl() longUrl: string;
}
