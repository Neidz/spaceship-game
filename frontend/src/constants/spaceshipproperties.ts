import { Spaceship } from "../gql/generated/graphql";

export type PlayableSpaceshipProperty = Exclude<keyof Spaceship, "id" | "name" | "__typename">;

export const playableSpaceshipProperties: PlayableSpaceshipProperty[] = [
    "crewSize",
    "maxSpeed",
    "range",
    "cargoCapacity",
    "cost",
    "weight",
    "batteryCapacity",
];

type SpaceshipPropertyLabels = {
    [key in PlayableSpaceshipProperty]: string;
};

export const spaceshipPropertyLabels: SpaceshipPropertyLabels = {
    batteryCapacity: "Battery capacity",
    cargoCapacity: "Cargo capacity",
    cost: "Cost",
    crewSize: "Crew size",
    maxSpeed: "Max speed",
    range: "Range",
    weight: "Weight",
};
