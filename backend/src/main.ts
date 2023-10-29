import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SpaceshipsService } from './spaceships/spaceships.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // This wouldn't exist in a real project, it's just to make showcase easier
  app.enableCors();
  const seeder = app.get(SpaceshipsService);
  await seeder.seedData();
  //

  await app.listen(3000);
}
bootstrap();
