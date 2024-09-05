import { BasicEntity } from 'src/db/entities/basic.entity';
import { ILinkEntity } from 'src/types/link';
import { generateRandStr } from 'src/utils/generate-rand-str';
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
  setRandShortUrl() {
    if (!this.shortUrl) this.shortUrl = generateRandStr();
  }
}
