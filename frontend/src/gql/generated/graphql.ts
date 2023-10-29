/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateSpaceshipInput = {
  batteryCapacity: Scalars['Int']['input'];
  cargoCapacity: Scalars['Int']['input'];
  cost: Scalars['Int']['input'];
  crewSize: Scalars['Int']['input'];
  maxSpeed: Scalars['Int']['input'];
  range: Scalars['Int']['input'];
  weight: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSpaceship: Spaceship;
  removeSpaceship: Spaceship;
  updateSpaceship: Spaceship;
};


export type MutationCreateSpaceshipArgs = {
  createSpaceshipInput: CreateSpaceshipInput;
};


export type MutationRemoveSpaceshipArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateSpaceshipArgs = {
  updateSpaceshipInput: UpdateSpaceshipInput;
};

export type Query = {
  __typename?: 'Query';
  spaceship: Spaceship;
  spaceships: Array<Spaceship>;
};


export type QuerySpaceshipArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySpaceshipsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Spaceship = {
  __typename?: 'Spaceship';
  batteryCapacity: Scalars['Int']['output'];
  cargoCapacity: Scalars['Int']['output'];
  cost: Scalars['Int']['output'];
  crewSize: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  maxSpeed: Scalars['Int']['output'];
  range: Scalars['Int']['output'];
  weight: Scalars['Int']['output'];
};

export type UpdateSpaceshipInput = {
  batteryCapacity?: InputMaybe<Scalars['Int']['input']>;
  cargoCapacity?: InputMaybe<Scalars['Int']['input']>;
  cost?: InputMaybe<Scalars['Int']['input']>;
  crewSize?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  maxSpeed?: InputMaybe<Scalars['Int']['input']>;
  range?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSpaceshipMutationVariables = Exact<{
  createSpaceshipInput: CreateSpaceshipInput;
}>;


export type CreateSpaceshipMutation = { __typename?: 'Mutation', createSpaceship: { __typename?: 'Spaceship', id: number, crewSize: number, maxSpeed: number, range: number, cargoCapacity: number, cost: number, weight: number, batteryCapacity: number } };

export type RemoveSpaceshipMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveSpaceshipMutation = { __typename?: 'Mutation', removeSpaceship: { __typename?: 'Spaceship', id: number, crewSize: number, maxSpeed: number, range: number, cargoCapacity: number, cost: number, weight: number, batteryCapacity: number } };

export type UpdateSpaceshipMutationVariables = Exact<{
  updateSpaceshipInput: UpdateSpaceshipInput;
}>;


export type UpdateSpaceshipMutation = { __typename?: 'Mutation', updateSpaceship: { __typename?: 'Spaceship', id: number, crewSize: number, maxSpeed: number, range: number, cargoCapacity: number, cost: number, weight: number, batteryCapacity: number } };

export type GetSpaceshipByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetSpaceshipByIdQuery = { __typename?: 'Query', spaceship: { __typename?: 'Spaceship', id: number, crewSize: number, maxSpeed: number, range: number, cargoCapacity: number, cost: number, weight: number, batteryCapacity: number } };

export type GetSpaceshipsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetSpaceshipsQuery = { __typename?: 'Query', spaceships: Array<{ __typename?: 'Spaceship', id: number, crewSize: number, maxSpeed: number, range: number, cargoCapacity: number, cost: number, weight: number, batteryCapacity: number }> };


export const CreateSpaceshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSpaceship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSpaceshipInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSpaceshipInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSpaceship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSpaceshipInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSpaceshipInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"crewSize"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"range"}},{"kind":"Field","name":{"kind":"Name","value":"cargoCapacity"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"batteryCapacity"}}]}}]}}]} as unknown as DocumentNode<CreateSpaceshipMutation, CreateSpaceshipMutationVariables>;
export const RemoveSpaceshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSpaceship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSpaceship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"crewSize"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"range"}},{"kind":"Field","name":{"kind":"Name","value":"cargoCapacity"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"batteryCapacity"}}]}}]}}]} as unknown as DocumentNode<RemoveSpaceshipMutation, RemoveSpaceshipMutationVariables>;
export const UpdateSpaceshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSpaceship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSpaceshipInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSpaceshipInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSpaceship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSpaceshipInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSpaceshipInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"crewSize"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"range"}},{"kind":"Field","name":{"kind":"Name","value":"cargoCapacity"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"batteryCapacity"}}]}}]}}]} as unknown as DocumentNode<UpdateSpaceshipMutation, UpdateSpaceshipMutationVariables>;
export const GetSpaceshipByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpaceshipById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spaceship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"crewSize"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"range"}},{"kind":"Field","name":{"kind":"Name","value":"cargoCapacity"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"batteryCapacity"}}]}}]}}]} as unknown as DocumentNode<GetSpaceshipByIdQuery, GetSpaceshipByIdQueryVariables>;
export const GetSpaceshipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpaceships"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spaceships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"crewSize"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"range"}},{"kind":"Field","name":{"kind":"Name","value":"cargoCapacity"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"batteryCapacity"}}]}}]}}]} as unknown as DocumentNode<GetSpaceshipsQuery, GetSpaceshipsQueryVariables>;