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

        expect(container.textContent).toContain("Nebula Nomad");
        expect(container.textContent).toContain("Crew size: 46");
        expect(container.textContent).toContain("Max speed: 10809");
        expect(container.textContent).toContain("Range: 199600");
        expect(container.textContent).toContain("Cargo capacity: 737");
        expect(container.textContent).toContain("Cost: 55405794");
        expect(container.textContent).toContain("Weight: 24125043");
        expect(container.textContent).toContain("Battery capacity: 1256868");
    });
});
