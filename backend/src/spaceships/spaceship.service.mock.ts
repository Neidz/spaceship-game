import { NotFoundException } from '@nestjs/common';
import { CreateSpaceshipInput } from './dto/create-spaceship.input';
import { UpdateSpaceshipInput } from './dto/update-spaceship.input';
import { Spaceship } from './entities/spaceship.entity';

const mockSpaceships: Spaceship[] = [
  {
    id: 1,
    crewSize: 10,
    maxSpeed: 5000,
    range: 10000,
    cargoCapacity: 5000,
    cost: 1000000,
    weight: 2000,
    batteryCapacity: 500,
  },
  {
    id: 2,
    crewSize: 5,
    maxSpeed: 7500,
    range: 8000,
    cargoCapacity: 4000,
    cost: 800000,
    weight: 1800,
    batteryCapacity: 550,
  },
  {
    id: 3,
    crewSize: 8,
    maxSpeed: 6000,
    range: 12000,
    cargoCapacity: 6000,
    cost: 1200000,
    weight: 2200,
    batteryCapacity: 600,
  },
  {
    id: 4,
    crewSize: 12,
    maxSpeed: 4500,
    range: 9000,
    cargoCapacity: 5500,
    cost: 950000,
    weight: 1900,
    batteryCapacity: 525,
  },
  {
    id: 5,
    crewSize: 6,
    maxSpeed: 7200,
    range: 8500,
    cargoCapacity: 4500,
    cost: 850000,
    weight: 1750,
    batteryCapacity: 575,
  },
];

class MockSpaceshipsService {
  create = jest.fn((createSpaceshipInput: CreateSpaceshipInput) => {
    const newSpaceship: Spaceship = { ...createSpaceshipInput, id: 6 };

    return [...mockSpaceships, newSpaceship];
  });
  findAll = jest.fn(() => mockSpaceships);
  findOne = jest.fn((id: number) => mockSpaceships.find((el) => el.id === id));
  update = jest.fn((id: number, updateSpaceshipInput: UpdateSpaceshipInput) => {
    const index = mockSpaceships.findIndex((el) => el.id === id);

    if (index === -1) {
      throw new NotFoundException(`Spaceship with id ${id} not found`);
    }

    const updatedSpaceship = {
      ...mockSpaceships[index],
      ...updateSpaceshipInput,
    };
    const updatedMockSpaceships = [...mockSpaceships];
    updatedMockSpaceships[index] = updatedSpaceship;

    return updatedMockSpaceships;
  });
  remove = jest.fn();
}

export { MockSpaceshipsService };
