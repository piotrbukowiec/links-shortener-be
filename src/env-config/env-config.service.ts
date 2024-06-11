import { Injectable, Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { EnvConfig } from 'src/types/env.config';

@Injectable()
export class EnvConfigService {
  async readConfig<T extends object & EnvConfig>(constructor: {
    new (...args: unknown[]): T;
  }): Promise<T> {
    const config = plainToInstance(constructor, process.env, {
      excludeExtraneousValues: true,
    });

    const errors = await validate(config);

    if (errors.length) {
      errors.forEach(({ constraints }) => {
        const constraintsMessage = constraints
          ? Object.values(constraints).join(', ')
          : 'unknown error';
        Logger.error(`Env validation error: ${constraintsMessage}`);
      });
    }

    return config;
  }
}
