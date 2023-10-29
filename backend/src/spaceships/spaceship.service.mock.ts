import { NotFoundException } from '@nestjs/common';
import { CreateSpaceshipInput } from './dto/create-spaceship.input';
import { UpdateSpaceshipInput } from './dto/update-spaceship.input';
import { Spaceship } from './entities/spaceship.entity';
import { generateRandomSpaceships } from './utils/generateRandomSpaceships';

export const amountOfMockedSpaceships = 40;
const mockSpaceships: Spaceship[] = generateRandomSpaceships(
  amountOfMockedSpaceships,
);

class MockSpaceshipsService {
  create = jest.fn((createSpaceshipInput: CreateSpaceshipInput) => {
    const newSpaceship: Spaceship = {
      ...createSpaceshipInput,
      id: amountOfMockedSpaceships + 1,
    };

    return Promise.resolve(newSpaceship);
  });

  findAll = jest.fn(() => mockSpaceships);

  findWithPagination = jest.fn((page: number, pageSize: number) => {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    return Promise.resolve(mockSpaceships.slice(offset, offset + limit));
  });

  findOne = jest.fn((id: number) => {
    const spaceship = mockSpaceships.find((el) => el.id === id);

    if (!spaceship) {
      throw new NotFoundException(`Spaceship with id ${id} not found`);
    }

    return Promise.resolve(spaceship);
  });

  update = jest.fn((id: number, updateSpaceshipInput: UpdateSpaceshipInput) => {
    const index = mockSpaceships.findIndex((el) => el.id === id);

    if (index === -1) {
      throw new NotFoundException(`Spaceship with id ${id} not found`);
    }

    const updatedSpaceship = {
      ...mockSpaceships[index],
      ...updateSpaceshipInput,
    };

    return Promise.resolve(updatedSpaceship);
  });

  remove = jest.fn((id: number) => {
    const index = mockSpaceships.findIndex((el) => el.id === id);

    if (index === -1) {
      throw new NotFoundException(`Spaceship with id ${id} not found`);
    }

    return Promise.resolve(mockSpaceships[index]);
  });
}

export { MockSpaceshipsService };
