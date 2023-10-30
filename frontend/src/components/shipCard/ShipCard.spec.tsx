import { render } from "@testing-library/react";
import { ShipCard } from "./ShipCard";
import { mockedSpaceship } from "../../test/mockedSpaceship";

describe("ShipCard Component", () => {
    it("renders the ShipCard component with provided spaceship data", () => {
        const { container } = render(<ShipCard spaceship={mockedSpaceship} />);

        Object.keys(mockedSpaceship).forEach((key) => {
            if (key !== "id") {
                expect(container.textContent).toContain(mockedSpaceship[key as keyof typeof mockedSpaceship].toString());
            }
        });
    });
});
