/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  company?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  dob?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  onboarded: Scalars["Boolean"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  resultPrivacy: Scalars["Boolean"]["input"];
  status: Scalars["String"]["input"];
  step?: InputMaybe<Scalars["String"]["input"]>;
  sub: Scalars["ID"]["input"];
  username: Scalars["String"]["input"];
};

export type DeleteUserInput = {
  sub: Scalars["ID"]["input"];
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  ge?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  le?: InputMaybe<Scalars["Int"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  getUser?: Maybe<User>;
  listUsers?: Maybe<UserConnection>;
};

export type QueryGetUserArgs = {
  sub: Scalars["ID"]["input"];
};

export type QueryListUsersArgs = {
  filter?: InputMaybe<TableUserFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  onCreateUser?: Maybe<User>;
  onDeleteUser?: Maybe<User>;
  onUpdateUser?: Maybe<User>;
};

export type SubscriptionOnCreateUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  sub?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  sub?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnUpdateUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  sub?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TableFloatFilterInput = {
  attributeExists?: InputMaybe<Scalars["Boolean"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  ge?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  le?: InputMaybe<Scalars["Float"]["input"]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
};

export type TableIdFilterInput = {
  attributeExists?: InputMaybe<Scalars["Boolean"]["input"]>;
  beginsWith?: InputMaybe<Scalars["ID"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  ge?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  le?: InputMaybe<Scalars["ID"]["input"]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableIntFilterInput = {
  attributeExists?: InputMaybe<Scalars["Boolean"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  ge?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  le?: InputMaybe<Scalars["Int"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TableStringFilterInput = {
  attributeExists?: InputMaybe<Scalars["Boolean"]["input"]>;
  beginsWith?: InputMaybe<Scalars["String"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  ge?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  le?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableUserFilterInput = {
  avatar?: InputMaybe<TableStringFilterInput>;
  company?: InputMaybe<TableStringFilterInput>;
  country?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  dob?: InputMaybe<TableStringFilterInput>;
  email?: InputMaybe<TableStringFilterInput>;
  firstName?: InputMaybe<TableStringFilterInput>;
  gender?: InputMaybe<TableStringFilterInput>;
  lastLogin?: InputMaybe<TableStringFilterInput>;
  lastName?: InputMaybe<TableStringFilterInput>;
  phone?: InputMaybe<TableStringFilterInput>;
  position?: InputMaybe<TableStringFilterInput>;
  resultPrivacy?: InputMaybe<TableBooleanFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
  sub?: InputMaybe<TableIdFilterInput>;
  updatedAt?: InputMaybe<TableStringFilterInput>;
  username?: InputMaybe<TableStringFilterInput>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  company?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  dob?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  onboarded?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  resultPrivacy?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  step?: InputMaybe<Scalars["String"]["input"]>;
  sub: Scalars["ID"]["input"];
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  avatar?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  dob?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  lastLogin?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  onboarded: Scalars["Boolean"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<Scalars["String"]["output"]>;
  resultPrivacy: Scalars["Boolean"]["output"];
  status: Scalars["String"]["output"];
  step: Scalars["String"]["output"];
  sub: Scalars["ID"]["output"];
  updatedAt: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateUserMutationVariables = Exact<{
  step?: InputMaybe<Scalars["String"]["input"]>;
  onboarded?: InputMaybe<Scalars["Boolean"]["input"]>;
  sub: Scalars["ID"]["input"];
  username?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  company?: InputMaybe<Scalars["String"]["input"]>;
  dob?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  resultPrivacy?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  user?: { __typename?: "User"; sub: string } | null;
};

export const UpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "step" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "onboarded" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sub" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "username" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastName" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstName" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "country" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "company" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "dob" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "avatar" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phone" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "position" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "resultPrivacy" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "user" },
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "step" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "step" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "onboarded" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "onboarded" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "lastName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "lastName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "firstName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "firstName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "country" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "country" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "company" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "company" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "dob" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "dob" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "avatar" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "avatar" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phone" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phone" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "position" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "position" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "resultPrivacy" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "resultPrivacy" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "sub" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "sub" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "username" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "username" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sub" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
