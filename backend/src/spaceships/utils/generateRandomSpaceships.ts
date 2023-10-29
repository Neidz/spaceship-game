import { Spaceship } from '../entities/spaceship.entity';

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomSpaceship = (id: number): Spaceship => {
  return {
    id,
    crewSize: getRandomInt(5, 50),
    maxSpeed: getRandomInt(1000, 30000),
    range: getRandomInt(5000, 300000),
    cargoCapacity: getRandomInt(500, 2000),
    cost: getRandomInt(2000000, 70000000),
    weight: getRandomInt(1000000, 70000000),
    batteryCapacity: getRandomInt(500000, 1500000),
  };
};

export const generateRandomSpaceshipWithoutId = (): Omit<Spaceship, 'id'> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _, ...spaceshipWithoutId } = generateRandomSpaceship(1);

  return spaceshipWithoutId;
};

export const generateRandomSpaceships = (count: number): Spaceship[] => {
  const spaceships: Spaceship[] = [];
  for (let i = 1; i <= count; i++) {
    spaceships.push(generateRandomSpaceship(i));
  }
  return spaceships;
};
