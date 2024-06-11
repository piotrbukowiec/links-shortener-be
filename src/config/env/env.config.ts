import { registerAs } from '@nestjs/config';
import { EnvConfigDto } from 'src/env-config/dto/env-config.dto';
import { EnvConfigService } from 'src/env-config/env-config.service';

export const envConfig = registerAs('env', async () => {
  const envConfigService = new EnvConfigService();
  return await envConfigService.readConfig(EnvConfigDto);
});
