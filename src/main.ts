import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DBService } from './Db/db.service';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const db = app.get(DBService);
  db.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();