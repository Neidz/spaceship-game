import { getRandomInteger } from "./getRandomInt";

describe("getRandomInt", () => {
    it("should generate a random integer within the specified range", () => {
        const min = 1;
        const max = 100;
        const randomNum = getRandomInteger(min, max);

        expect(randomNum % 1).toBe(0);
        expect(randomNum).toBeGreaterThanOrEqual(min);
        expect(randomNum).toBeLessThanOrEqual(max);
    });
});
