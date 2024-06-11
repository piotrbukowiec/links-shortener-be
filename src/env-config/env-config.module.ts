import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigService } from 'src/env-config/env-config.service';
import { envConfig } from '../config/env/env.config';

@Module({
  imports: [ConfigModule.forFeature(envConfig)],
  providers: [EnvConfigService],
  exports: [EnvConfigService],
})
export class EnvConfigModule {}
