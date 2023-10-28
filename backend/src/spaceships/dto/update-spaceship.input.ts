import { CreateSpaceshipInput } from './create-spaceship.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpaceshipInput extends PartialType(CreateSpaceshipInput) {
  @Field(() => Int)
  id: number;
}
