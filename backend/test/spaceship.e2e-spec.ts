import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SpaceshipsService } from '../src/spaceships/spaceships.service';
import {
  MockSpaceshipsService,
  amountOfMockedSpaceships,
} from '../src/spaceships/spaceship.service.mock';
import { AppModule } from '../src/app.module';
import {
  generateRandomSpaceship,
  generateRandomSpaceshipWithoutId,
} from '../src/spaceships/utils/generateRandomSpaceships';

describe('SpaceshipResolver (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(SpaceshipsService)
      .useClass(MockSpaceshipsService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /graphql (Query: spaceships without arguments)', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            spaceships {
              id
              crewSize
            }
          }
        `,
      })
      .expect(200)
      .expect((res) => {
        const data = res.body.data;
        expect(data).toBeDefined();
        expect(data.spaceships).toBeDefined();
        expect(data.spaceships.length).toEqual(amountOfMockedSpaceships);
        expect(Object.keys(data.spaceships[0]).length).toEqual(2);
      });
  });

  it('GET /graphql (Query: spaceships with pagination)', () => {
    const page = 2;
    const pageSize = 10;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            spaceships(page: ${page}, pageSize: ${pageSize}) {
              id
              crewSize
            }
          }
        `,
      })
      .expect(200)
      .expect((res) => {
        const data = res.body.data;
        expect(data).toBeDefined();
        expect(data.spaceships).toBeDefined();
        expect(data.spaceships.length).toEqual(10);
      });
  });

  it('GET /graphql (Query: spaceship with ID)', () => {
    const spaceshipId = 5;
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            spaceship(id: ${spaceshipId}) {
              id
              crewSize
            }
          }
        `,
      })
      .expect(200)
      .expect((res) => {
        const data = res.body.data;
        expect(data).toBeDefined();
        expect(data.spaceship).toBeDefined();
      });
  });

  it('GET /graphql (Query: spaceship with invalid ID)', () => {
    const invalidId = 670;
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            spaceship(id: ${invalidId}) {
              id
              crewSize
            }
          }
        `,
      })
      .expect(200)
      .expect((res) => expect(res.body.data).toBeNull());
  });

  it('POST /graphql (Mutation: createSpaceship)', () => {
    const createSpaceshipInput = generateRandomSpaceshipWithoutId();

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
        mutation($createSpaceshipInput: CreateSpaceshipInput!) {
          createSpaceship(createSpaceshipInput: $createSpaceshipInput) {
            id
            crewSize
          }
        }
      `,
        variables: {
          createSpaceshipInput,
        },
      })
      .expect(200)
      .expect((res) => {
        const data = res.body.data;
        expect(data).toBeDefined();
        expect(data.createSpaceship).toBeDefined();
        expect(data.createSpaceship.id).toBeDefined();
      });
  });

  it('POST /graphql (Mutation: updateSpaceship)', () => {
    const updateSpaceshipInput = generateRandomSpaceship(5);

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation($input: UpdateSpaceshipInput!) {
            updateSpaceship(updateSpaceshipInput: $input) {
              id
              crewSize
            }
          }
        `,
        variables: { input: updateSpaceshipInput },
      })
      .expect(200)
      .expect((res) => {
        const data = res.body.data;
        expect(data).toBeDefined();
        expect(data.updateSpaceship).toBeDefined();
      });
  });

  it('POST /graphql (Mutation: removeSpaceship)', () => {
    const spaceshipId = 5;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation($id: Int!) {
            removeSpaceship(id: $id) {
              id
              crewSize
            }
          }
        `,
        variables: { id: spaceshipId },
      })
      .expect(200)
      .expect((res) => {
        const data = res.body.data;
        expect(data).toBeDefined();
        expect(data.removeSpaceship).toBeDefined();
      });
  });
});
