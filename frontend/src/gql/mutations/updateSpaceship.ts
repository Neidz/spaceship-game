import { gql } from "../generated";

export const UPDATE_SPACESHIP = gql(`
    mutation UpdateSpaceship($updateSpaceshipInput: UpdateSpaceshipInput!) {
        updateSpaceship(updateSpaceshipInput: $updateSpaceshipInput) {
            id
            name
            crewSize
            maxSpeed
            range
            cargoCapacity
            cost
            weight
            batteryCapacity
        }
    }
`);
