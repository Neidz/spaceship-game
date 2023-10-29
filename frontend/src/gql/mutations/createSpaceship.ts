import { gql } from "graphql-tag";

export const CREATE_SPACESHIP = gql`
    mutation CreateSpaceship($createSpaceshipInput: CreateSpaceshipInput!) {
        createSpaceship(createSpaceshipInput: $createSpaceshipInput) {
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
