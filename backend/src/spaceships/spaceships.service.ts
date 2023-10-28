import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpaceshipInput } from './dto/create-spaceship.input';
import { UpdateSpaceshipInput } from './dto/update-spaceship.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Spaceship } from './entities/spaceship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpaceshipsService {
  constructor(
    @InjectRepository(Spaceship)
    private spaceshipRepository: Repository<Spaceship>,
  ) {}

  async create(createSpaceshipInput: CreateSpaceshipInput): Promise<Spaceship> {
    return this.spaceshipRepository.save(createSpaceshipInput);
  }

  async findAll(): Promise<Spaceship[]> {
    return this.spaceshipRepository.find();
  }

  async findWithPagination(
    page: number,
    pageSize: number,
  ): Promise<Spaceship[]> {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    return this.spaceshipRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Spaceship> {
    return this.spaceshipRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateSpaceshipInput: UpdateSpaceshipInput,
  ): Promise<Spaceship> {
    const spaceship = await this.spaceshipRepository.findOneBy({ id });

    if (!spaceship) {
      throw new NotFoundException(`Spaceship with id ${id} not found`);
    }

    Object.assign(spaceship, updateSpaceshipInput);
    return this.spaceshipRepository.save(spaceship);
  }

  async remove(id: number): Promise<Spaceship> {
    const spaceship = await this.spaceshipRepository.findOneBy({ id });

    if (!spaceship) {
      throw new NotFoundException(`Spaceship with id ${id} not found`);
    }

    return this.spaceshipRepository.remove(spaceship);
  }
}
