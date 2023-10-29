import { gql } from "graphql-tag";

export const GET_SPACESHIPS = gql`
    query GetSpaceships($page: Int, $pageSize: Int) {
        spaceships(page: $page, pageSize: $pageSize) {
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
`;
