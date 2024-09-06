import { BasicEntity } from 'src/db/entities/basic.entity';
import { ILinkEntity } from 'src/types/link';
import { generateUniqueShortUrl } from 'src/utils/generate-random-short-url';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity()
export class LinkEntity extends BasicEntity implements ILinkEntity {
  @Column({
    unique: true,
    type: 'text',
  })
  longUrl: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 5,
  })
  shortUrl: string;

  @BeforeInsert()
  async setRandShortUrl() {
    if (!this.shortUrl) {
      this.shortUrl = await generateUniqueShortUrl();
    }
  }
}
