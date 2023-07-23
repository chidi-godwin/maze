import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaClientKnownRequestErrorFilter } from './filters/prismaError.filter';
import { TransformInterceptor } from './filters/sucess.filter';
import { CustomExceptionFilter } from './filters/error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

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

  // Registering the success interceptor globally
  app.useGlobalInterceptors(new TransformInterceptor());

  // Registering the error filter globally
  app.useGlobalFilters(new CustomExceptionFilter());

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
