import { IsNumber, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { EnvConfig } from 'src/types/env.config';

export class EnvConfigDto implements EnvConfig {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @Expose({ name: 'APP_PORT' })
  APP_PORT: number;

  @IsString()
  @Expose({ name: 'DB_TYPE' })
  DB_TYPE: string;

  @IsString()
  @Expose({ name: 'DB_HOST' })
  DB_HOST: string;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  @Expose({ name: 'DB_PORT' })
  DB_PORT: number;

  @IsString()
  @Expose({ name: 'DB_USERNAME' })
  DB_USERNAME: string;

  @IsString()
  @Expose({ name: 'DB_PASSWORD' })
  DB_PASSWORD: string;
}
