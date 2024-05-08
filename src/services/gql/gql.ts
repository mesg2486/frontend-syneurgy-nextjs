/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
  "\n  mutation updateUser(\n    $step: String\n    $onboarded: Boolean\n    $sub: ID!\n    $username: String\n    $email: String\n    $status: String\n    $lastName: String\n    $firstName: String\n    $country: String\n    $company: String\n    $dob: String\n    $avatar: String\n    $phone: String\n    $position: String\n    $resultPrivacy: Boolean\n  ) {\n    user: updateUser(\n      input: {\n        step: $step\n        onboarded: $onboarded\n        lastName: $lastName\n        firstName: $firstName\n        country: $country\n        company: $company\n        dob: $dob\n        avatar: $avatar\n        phone: $phone\n        position: $position\n        resultPrivacy: $resultPrivacy\n        status: $status\n        sub: $sub\n        username: $username\n        email: $email\n      }\n    ) {\n      sub\n    }\n  }\n":
    types.UpdateUserDocument,
  "\n  mutation createTeam($createdBy: ID!, $name: String!) {\n    team: createTeam(input: { createdBy: $createdBy, name: $name }) {\n      id\n    }\n  }\n":
    types.CreateTeamDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation updateUser(\n    $step: String\n    $onboarded: Boolean\n    $sub: ID!\n    $username: String\n    $email: String\n    $status: String\n    $lastName: String\n    $firstName: String\n    $country: String\n    $company: String\n    $dob: String\n    $avatar: String\n    $phone: String\n    $position: String\n    $resultPrivacy: Boolean\n  ) {\n    user: updateUser(\n      input: {\n        step: $step\n        onboarded: $onboarded\n        lastName: $lastName\n        firstName: $firstName\n        country: $country\n        company: $company\n        dob: $dob\n        avatar: $avatar\n        phone: $phone\n        position: $position\n        resultPrivacy: $resultPrivacy\n        status: $status\n        sub: $sub\n        username: $username\n        email: $email\n      }\n    ) {\n      sub\n    }\n  }\n",
): (typeof documents)["\n  mutation updateUser(\n    $step: String\n    $onboarded: Boolean\n    $sub: ID!\n    $username: String\n    $email: String\n    $status: String\n    $lastName: String\n    $firstName: String\n    $country: String\n    $company: String\n    $dob: String\n    $avatar: String\n    $phone: String\n    $position: String\n    $resultPrivacy: Boolean\n  ) {\n    user: updateUser(\n      input: {\n        step: $step\n        onboarded: $onboarded\n        lastName: $lastName\n        firstName: $firstName\n        country: $country\n        company: $company\n        dob: $dob\n        avatar: $avatar\n        phone: $phone\n        position: $position\n        resultPrivacy: $resultPrivacy\n        status: $status\n        sub: $sub\n        username: $username\n        email: $email\n      }\n    ) {\n      sub\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createTeam($createdBy: ID!, $name: String!) {\n    team: createTeam(input: { createdBy: $createdBy, name: $name }) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation createTeam($createdBy: ID!, $name: String!) {\n    team: createTeam(input: { createdBy: $createdBy, name: $name }) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
