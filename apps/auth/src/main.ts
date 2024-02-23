import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as passport from 'passport';
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  /* The `useContainer` function in the provided TypeScript code snippet is used to configure the
  dependency injection container for the NestJS application. In this specific usage,
  `useContainer(app, { fallbackOnErrors: true })`, the `useContainer` function is being called with
  two arguments: */
  useContainer(app, { fallbackOnErrors: true });
  /* `app.enableCors();` in the provided TypeScript code snippet is enabling Cross-Origin Resource
  Sharing (CORS) for the NestJS application. CORS is a security feature implemented by web browsers
  to restrict web pages from making requests to a different domain than the one that served the
  original page. */
  app.enableCors();

  // const rmqService = app.get<RmqService>

  /* The code snippet `const globalPrefix = 'api'; app.setGlobalPrefix(globalPrefix);` is setting a
global prefix for the routes in the NestJS application. By setting a global prefix, all routes
defined within the application will be prefixed with the specified value, in this case, 'api'. */

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(passport.initialize());

  /* The code block you provided is conditionally generating and setting up Swagger documentation for
  the NestJS application when the environment variable `NODE_ENV` is set to `'production'`. */

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
