import { gql } from "../generated";

export const GET_SPACESHIP_BY_ID = gql(`
    query GetSpaceshipById($id: Int!) {
        spaceship(id: $id) {
            id
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
