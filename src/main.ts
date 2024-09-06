import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  (app as NestExpressApplication).set('trust proxy', true);
  app.enableShutdownHooks();
  await app.listen(process.env.APP_PORT);
};
bootstrap();
