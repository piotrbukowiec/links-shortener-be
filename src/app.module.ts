import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
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
    }),
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
