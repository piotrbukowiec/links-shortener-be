import { IBasicEntity } from 'src/types/basic-entity';
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  ColumnOptions,
  PrimaryColumn,
} from 'typeorm';

const timeColumnSettings: ColumnOptions = {
  type: 'timestamp with time zone',
};

export abstract class BasicEntity extends BaseEntity implements IBasicEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @CreateDateColumn(timeColumnSettings)
  createdAt: Date;

  @UpdateDateColumn(timeColumnSettings)
  updatedAt: Date;

  // @DeleteDateColumn(timeColumnSettings)
  // deletedAt: Date;
}
