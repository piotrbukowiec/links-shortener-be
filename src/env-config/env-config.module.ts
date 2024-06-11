import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigService } from 'src/env-config/env-config.service';
import { envConfigServiceConfig } from '../config/env/env-config-service.config';

@Module({
  imports: [ConfigModule.forFeature(envConfigServiceConfig)],
  providers: [EnvConfigService],
  exports: [EnvConfigService],
})
export class EnvConfigModule {}
