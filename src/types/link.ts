import { BasicEntity } from 'src/db/entities/basic.entity';

interface ICreateLinkDto {
  longUrl: string;
}

interface ICreateLinkResponse {
  shortUrl: string;
}

type ILinkEntity = ICreateLinkDto & ICreateLinkResponse & BasicEntity;

export { ICreateLinkDto, ICreateLinkResponse, ILinkEntity };
