import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SpaceshipsService } from './spaceships.service';
import { Spaceship } from './entities/spaceship.entity';
import { CreateSpaceshipInput } from './dto/create-spaceship.input';
import { UpdateSpaceshipInput } from './dto/update-spaceship.input';
import { BadRequestException } from '@nestjs/common';

@Resolver(() => Spaceship)
export class SpaceshipsResolver {
  constructor(private readonly spaceshipsService: SpaceshipsService) {}

  @Mutation(() => Spaceship, { name: 'createSpaceship' })
  createSpaceship(
    @Args('createSpaceshipInput') createSpaceshipInput: CreateSpaceshipInput,
  ) {
    return this.spaceshipsService.create(createSpaceshipInput);
  }

  @Query(() => [Spaceship], { name: 'spaceships' })
  findSpaceships(
    @Args('page', { type: () => Int, nullable: true }) page?: number,
    @Args('pageSize', { type: () => Int, nullable: true }) pageSize?: number,
  ) {
    if (
      (page === undefined && pageSize !== undefined) ||
      (page !== undefined && pageSize === undefined)
    ) {
      throw new BadRequestException(
        'Both page and pageSize must be provided for pagination.',
      );
    } else if (page < 1 || pageSize < 1) {
      throw new BadRequestException(
        'Both page and pageSize must be bigger than 0.',
      );
    } else if (page !== undefined && pageSize !== undefined) {
      return this.spaceshipsService.findWithPagination(page, pageSize);
    } else {
      return this.spaceshipsService.findAll();
    }
  }

  @Query(() => Spaceship, { name: 'spaceship' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.spaceshipsService.findOne(id);
  }

  @Mutation(() => Spaceship, { name: 'updateSpaceship' })
  updateSpaceship(
    @Args('updateSpaceshipInput') updateSpaceshipInput: UpdateSpaceshipInput,
  ) {
    return this.spaceshipsService.update(
      updateSpaceshipInput.id,
      updateSpaceshipInput,
    );
  }

  @Mutation(() => Spaceship, { name: 'removeSpaceship' })
  removeSpaceship(@Args('id', { type: () => Int }) id: number) {
    return this.spaceshipsService.remove(id);
  }
}
