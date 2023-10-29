import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Spaceship {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  crewSize: number;

  @Field(() => Int)
  @Column()
  maxSpeed: number;

  @Field(() => Int)
  @Column()
  range: number;

  @Field(() => Int)
  @Column()
  cargoCapacity: number;

  @Field(() => Int)
  @Column()
  cost: number;

  @Field(() => Int)
  @Column()
  weight: number;

  @Field(() => Int)
  @Column()
  batteryCapacity: number;
}
