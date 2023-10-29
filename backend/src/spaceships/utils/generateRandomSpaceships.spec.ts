import {
  generateRandomSpaceshipWithoutId,
  generateRandomSpaceships,
} from './generateRandomSpaceships';

describe('generateRandomSpaceshipWithoutId', () => {
  it('should return a spaceship without the "id" property', () => {
    const spaceshipWithoutId = generateRandomSpaceshipWithoutId();

    expect(spaceshipWithoutId).not.toHaveProperty('id');
  });
});

describe('GenerateRandomSpaceships', () => {
  it('should generate an array of spaceships with the specified count', () => {
    const count = 10;
    const spaceships = generateRandomSpaceships(count);

    expect(spaceships).toHaveLength(count);
  });

  it('should generate random spaceships with valid attributes', () => {
    const count = 5;
    const spaceships = generateRandomSpaceships(count);

    spaceships.forEach((spaceship) => {
      expect(spaceship).toHaveProperty('id');
      expect(spaceship).toHaveProperty('name');
      expect(spaceship).toHaveProperty('crewSize');
      expect(spaceship).toHaveProperty('maxSpeed');
      expect(spaceship).toHaveProperty('range');
      expect(spaceship).toHaveProperty('cargoCapacity');
      expect(spaceship).toHaveProperty('cost');
      expect(spaceship).toHaveProperty('weight');
      expect(spaceship).toHaveProperty('batteryCapacity');
    });
  });
});
