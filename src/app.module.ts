import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/db/typeorm.config';
import { EnvConfigService } from './env-config/env-config.service';
import { envConfig } from './config/env/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ConfigModule.forFeature(envConfig),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService, EnvConfigService],
})
export class AppModule {}
