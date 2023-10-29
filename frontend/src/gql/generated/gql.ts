/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateSpaceship($createSpaceshipInput: CreateSpaceshipInput!) {\n        createSpaceship(createSpaceshipInput: $createSpaceshipInput) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n": types.CreateSpaceshipDocument,
    "\n    mutation RemoveSpaceship($id: Int!) {\n        removeSpaceship(id: $id) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n": types.RemoveSpaceshipDocument,
    "\n    mutation UpdateSpaceship($updateSpaceshipInput: UpdateSpaceshipInput!) {\n        updateSpaceship(updateSpaceshipInput: $updateSpaceshipInput) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n": types.UpdateSpaceshipDocument,
    "\n    query GetSpaceshipById($id: Int!) {\n        spaceship(id: $id) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n": types.GetSpaceshipByIdDocument,
    "\n    query GetSpaceships($page: Int, $pageSize: Int) {\n        spaceships(page: $page, pageSize: $pageSize) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n": types.GetSpaceshipsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateSpaceship($createSpaceshipInput: CreateSpaceshipInput!) {\n        createSpaceship(createSpaceshipInput: $createSpaceshipInput) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"): (typeof documents)["\n    mutation CreateSpaceship($createSpaceshipInput: CreateSpaceshipInput!) {\n        createSpaceship(createSpaceshipInput: $createSpaceshipInput) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveSpaceship($id: Int!) {\n        removeSpaceship(id: $id) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveSpaceship($id: Int!) {\n        removeSpaceship(id: $id) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateSpaceship($updateSpaceshipInput: UpdateSpaceshipInput!) {\n        updateSpaceship(updateSpaceshipInput: $updateSpaceshipInput) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateSpaceship($updateSpaceshipInput: UpdateSpaceshipInput!) {\n        updateSpaceship(updateSpaceshipInput: $updateSpaceshipInput) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetSpaceshipById($id: Int!) {\n        spaceship(id: $id) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"): (typeof documents)["\n    query GetSpaceshipById($id: Int!) {\n        spaceship(id: $id) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetSpaceships($page: Int, $pageSize: Int) {\n        spaceships(page: $page, pageSize: $pageSize) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"): (typeof documents)["\n    query GetSpaceships($page: Int, $pageSize: Int) {\n        spaceships(page: $page, pageSize: $pageSize) {\n            id\n            name\n            crewSize\n            maxSpeed\n            range\n            cargoCapacity\n            cost\n            weight\n            batteryCapacity\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;