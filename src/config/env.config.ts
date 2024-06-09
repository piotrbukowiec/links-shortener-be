import { ConfigModuleOptions } from '@nestjs/config';
import { envValidationSchema as validationSchema } from 'src/validation-schemas/env-validation.schema';
export const envConfig: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema,
};
