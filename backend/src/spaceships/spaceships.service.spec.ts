import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsService } from './spaceships.service';
import {
  MockSpaceshipsService,
  amountOfMockedSpaceships,
} from './spaceship.service.mock';
import { generateRandomSpaceship } from './utils/generateRandomSpaceships';
import { UpdateSpaceshipInput } from './dto/update-spaceship.input';
import { Spaceship } from './entities/spaceship.entity';
import { NotFoundException } from '@nestjs/common';

describe('SpaceshipsService', () => {
  let service: SpaceshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceshipsService],
    })
      .overrideProvider(SpaceshipsService)
      .useClass(MockSpaceshipsService)
      .compile();

    service = module.get<SpaceshipsService>(SpaceshipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new spaceship with new id, ignoring provided id', async () => {
    const newSpaceship = generateRandomSpaceship(1);

    const createdSpaceship = await service.create(newSpaceship);

    expect(createdSpaceship).toBeDefined();
  });

  it('should find all spaceships', async () => {
    const spaceships = await service.findAll();

    expect(spaceships.length).toEqual(amountOfMockedSpaceships);
  });

  it('should find spaceships with pagination', async () => {
    const page = 2;
    const pageSize = 10;

    const spaceships = await service.findWithPagination(page, pageSize);

    const expectedStartId = (page - 1) * pageSize + 1;

    expect(spaceships).toHaveLength(pageSize);

    spaceships.forEach((spaceship, index) => {
      expect(spaceship.id).toEqual(expectedStartId + index);
    });
  });

  it('should find a spaceship by ID', async () => {
    const id = 5;
    const spaceship = await service.findOne(id);

    expect(spaceship.id).toEqual(id);
  });

  it("shouldn't find a spaceship by ID that doesn't exist", async () => {
    const id = 570;
    let spaceship: Spaceship;

    expect(spaceship).toBeUndefined();

    try {
      spaceship = await service.findOne(id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }

    expect(spaceship).toBeUndefined();
  });

  it('should update a spaceship', async () => {
    const id = 5;
    const updatedData: UpdateSpaceshipInput = {
      id,
      crewSize: 30,
      maxSpeed: 10000,
    };

    const updatedSpaceship = await service.update(id, updatedData);

    expect(updatedSpaceship.crewSize).toEqual(updatedData.crewSize);
    expect(updatedSpaceship.maxSpeed).toEqual(updatedData.maxSpeed);
  });

  it("shouldn't update a spaceship by ID that doesn't exist", async () => {
    const id = 570;
    const updatedData: UpdateSpaceshipInput = {
      id,
      crewSize: 30,
      maxSpeed: 10000,
    };
    let spaceship: Spaceship;

    try {
      spaceship = await service.update(id, updatedData);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }

    expect(spaceship).toBeUndefined();
  });

  it('should remove a spaceship by ID', async () => {
    const id = 5;

    const removedSpaceship = await service.remove(id);

    expect(removedSpaceship).toBeDefined();
  });

  it("shouldn't remove a spaceship by ID that doesn't exist", async () => {
    const id = 570;
    let spaceship: Spaceship;

    try {
      spaceship = await service.remove(id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }

    expect(spaceship).toBeUndefined();
  });
});
