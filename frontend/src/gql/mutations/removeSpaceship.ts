import { gql } from "../generated";

export const REMOVE_SPACESHIP = gql(`
    mutation RemoveSpaceship($id: Int!) {
        removeSpaceship(id: $id) {
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
