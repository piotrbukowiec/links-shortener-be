import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { LinkEntity } from './entities/link.entity';
import { ensureProtocol } from 'src/utils/ensure-protocol';
import { url } from 'inspector';

@Injectable()
export class LinksService {
  async create({ longUrl }: CreateLinkDto): Promise<LinkEntity> {
    const existingLink = await this.findOneByLongUrl(longUrl);
    if (existingLink) return existingLink;

    const link = new LinkEntity();
    Object.assign(link, {
      longUrl,
    });

    return await link.save();
  }

  async findAll(): Promise<LinkEntity[]> {
    return await LinkEntity.find();
  }

  async findOne(id: string): Promise<LinkEntity> {
    const link = await this.findOneById(id);
    if (!link) throw new NotFoundException('Link not found');
    return link;
  }

  // async update(id: string, updateLinkDto: UpdateLinkDto) {
  //   return `This action updates a #${id} link`;
  // }

  async remove(id: string): Promise<void> {
    const link = await this.findOneById(id);
    if (!link) throw new NotFoundException('Tried to remove non existing link');
    await link.remove();
  }

  // async redirect(shortUrl: string) {
  //   const link = await this.findOneByShortUrl(shortUrl);
  //   console.log('LINK: ', link);
  //   if (!link) throw new NotFoundException('Link not found');
  //   const { longUrl } = link;
  //   console.log('LONG URL: ', longUrl);
  //   return {
  //     url: longUrl,
  //   };
  // }
  async redirect(shortUrl: string) {
    const link = await this.findOneByShortUrl(shortUrl);

    if (!link) throw new NotFoundException('Link not found');

    const { longUrl } = link;

    const finalUrl = ensureProtocol(longUrl);

    return {
      url: finalUrl,
    };
  }

  async findOneById(id: string): Promise<LinkEntity> {
    return (await LinkEntity.findOneBy({ id })) ?? null;
  }

  async findOneByShortUrl(shortUrl: string): Promise<LinkEntity> {
    return (await LinkEntity.findOneBy({ shortUrl })) ?? null;
  }

  async findOneByLongUrl(longUrl: string): Promise<LinkEntity> {
    return (await LinkEntity.findOneBy({ longUrl })) ?? null;
  }
}
