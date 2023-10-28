import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SpaceshipsService } from './spaceships.service';
import { Spaceship } from './entities/spaceship.entity';
import { CreateSpaceshipInput } from './dto/create-spaceship.input';
import { UpdateSpaceshipInput } from './dto/update-spaceship.input';

@Resolver(() => Spaceship)
export class SpaceshipsResolver {
  constructor(private readonly spaceshipsService: SpaceshipsService) {}

  @Mutation(() => Spaceship)
  createSpaceship(
    @Args('createSpaceshipInput') createSpaceshipInput: CreateSpaceshipInput,
  ) {
    return this.spaceshipsService.create(createSpaceshipInput);
  }

  @Query(() => [Spaceship], { name: 'spaceships' })
  findAll() {
    return this.spaceshipsService.findAll();
  }

  @Query(() => Spaceship, { name: 'spaceship' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.spaceshipsService.findOne(id);
  }

  @Mutation(() => Spaceship)
  updateSpaceship(
    @Args('updateSpaceshipInput') updateSpaceshipInput: UpdateSpaceshipInput,
  ) {
    return this.spaceshipsService.update(
      updateSpaceshipInput.id,
      updateSpaceshipInput,
    );
  }

  @Mutation(() => Spaceship)
  removeSpaceship(@Args('id', { type: () => Int }) id: number) {
    return this.spaceshipsService.remove(id);
  }
}
