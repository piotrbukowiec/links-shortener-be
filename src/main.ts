import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.enableShutdownHooks();
  const config = new DocumentBuilder()
    .setTitle('Link shortener documentation')
    .setDescription('Documentation of link shortener app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('APP_PORT'));
};
bootstrap();
