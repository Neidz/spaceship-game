import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsResolver } from './spaceships.resolver';
import { SpaceshipsService } from './spaceships.service';
import { MockSpaceshipsService } from './spaceship.service.mock';
import { BadRequestException } from '@nestjs/common';

describe('SpaceshipsResolver', () => {
  let resolver: SpaceshipsResolver;
  let service: SpaceshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceshipsResolver, SpaceshipsService],
    })
      .overrideProvider(SpaceshipsService)
      .useClass(MockSpaceshipsService)
      .compile();

    resolver = module.get<SpaceshipsResolver>(SpaceshipsResolver);
    service = module.get<SpaceshipsService>(SpaceshipsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findSpaceships', () => {
    it('should find spaceships with pagination', () => {
      const page = 1;
      const pageSize = 10;

      const result = resolver.findSpaceships(page, pageSize);

      expect(result).toEqual(service.findWithPagination(page, pageSize));
    });

    it('should throw an error if either page or pageSize is missing', () => {
      const page = 1;
      const pageSize = undefined;

      try {
        resolver.findSpaceships(page, pageSize);
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toBeDefined();
      }

      const page2 = undefined;
      const pageSize2 = 10;

      try {
        resolver.findSpaceships(page2, pageSize2);
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toBeDefined();
      }
    });

    it('should throw an error if either page or pageSize is lower than 1', () => {
      const page = 1;
      const pageSize = -1;

      try {
        resolver.findSpaceships(page, pageSize);
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toBeDefined();
      }

      const page2 = -1;
      const pageSize2 = 10;

      try {
        resolver.findSpaceships(page2, pageSize2);
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toBeDefined();
      }
    });

    it('should find all spaceships without pagination', () => {
      const page = undefined;
      const pageSize = undefined;

      const result = resolver.findSpaceships(page, pageSize);

      expect(result).toEqual(service.findAll());
    });
  });
});
