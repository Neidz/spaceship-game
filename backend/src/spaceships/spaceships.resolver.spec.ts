import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsResolver } from './spaceships.resolver';
import { SpaceshipsService } from './spaceships.service';
import { MockSpaceshipsService } from './spaceship.service.mock';

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
});
