import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaClientKnownRequestErrorFilter } from './filters/prismaError.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // enable global prisma error filter
  app.useGlobalFilters(new PrismaClientKnownRequestErrorFilter());

  // enable swagger
  const config = new DocumentBuilder()
    .setTitle('Maze API')
    .setDescription('The Maze API description')
    .setVersion('1.0')
    .addTag('Waitlist')
    .addTag('Club')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
