import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const getEnv = <T>(envVar: string) => configService.get<T>(envVar);
    return {
      type: getEnv<'postgres'>('DB_TYPE'),
      host: getEnv<string>('DB_HOST'),
      port: getEnv<number>('DB_PORT'),
      username: getEnv<string>('DB_USERNAME'),
      password: getEnv<string>('DB_PASSWORD'),
      database: 'links_shortener',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      logging: true,
      synchronize: true,
    };
  },
};
