import { Module } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';
import { SpaceshipsResolver } from './spaceships.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spaceship } from './entities/spaceship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spaceship])],
  providers: [SpaceshipsResolver, SpaceshipsService],
})
export class SpaceshipsModule {}
