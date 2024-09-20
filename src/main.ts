import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      whitelist: true,
    }),
  );
  (app as NestExpressApplication).set('trust proxy', true);
  app.enableShutdownHooks();

  app.enableCors({ origin: true });
  const config = new DocumentBuilder()
    .setTitle('Docs')
    .setDescription('Docs of links shortener app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request Host: ${req.get('host')}`);
    next();
  });

  await app.listen(process.env.APP_PORT);
};
bootstrap();
