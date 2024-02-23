import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as passport from 'passport';
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  useContainer(app, { fallbackOnErrors: true });
  app.enableCors();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(passport.initialize());

  if (process.env.NODE_ENV === 'production') {
    const config = new DocumentBuilder()
      .setTitle('MessageProduct')
      .setDescription('Message Product Service API')
      .setVersion('1.0')
      .addTag('MessageProduct')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}
bootstrap();
