import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpaceshipInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  crewSize: number;

  @Field(() => Int)
  maxSpeed: number;

  @Field(() => Int)
  range: number;

  @Field(() => Int)
  cargoCapacity: number;

  @Field(() => Int)
  cost: number;

  @Field(() => Int)
  weight: number;

  @Field(() => Int)
  batteryCapacity: number;
}
