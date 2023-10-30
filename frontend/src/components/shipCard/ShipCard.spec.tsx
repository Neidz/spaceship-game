import { render } from "@testing-library/react";
import { ShipCard } from "./ShipCard";

describe("ShipCard Component", () => {
    const sampleSpaceship = {
        id: 1,
        name: "Nebula Nomad",
        crewSize: 46,
        maxSpeed: 10809,
        range: 199600,
        cargoCapacity: 737,
        cost: 55405794,
        weight: 24125043,
        batteryCapacity: 1256868,
    };

    it("renders the ShipCard component with provided spaceship data", () => {
        const { container } = render(<ShipCard spaceship={sampleSpaceship} />);

        Object.keys(sampleSpaceship).forEach((key) => {
            if (key !== "id") {
                expect(container.textContent).toContain(sampleSpaceship[key as keyof typeof sampleSpaceship].toString());
            }
        });
    });
});
