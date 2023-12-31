import { gql } from "../generated";

export const GET_SPACESHIPS = gql(`
    query GetSpaceships($page: Int, $pageSize: Int) {
        spaceships(page: $page, pageSize: $pageSize) {
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
