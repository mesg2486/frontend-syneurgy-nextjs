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
  "\n  mutation updateUser(\n    $step: String\n    $onboarded: Boolean\n    $sub: ID!\n    $username: String\n    $email: String\n    $status: String\n    $lastName: String\n    $firstName: String\n    $country: String\n    $company: String\n    $dob: String\n    $avatar: String\n    $phone: String\n    $position: String\n    $resultPrivacy: Boolean\n    $firstTeam: String\n    $firstMeeting: String\n  ) {\n    user: updateUser(\n      input: {\n        step: $step\n        onboarded: $onboarded\n        lastName: $lastName\n        firstName: $firstName\n        country: $country\n        company: $company\n        dob: $dob\n        avatar: $avatar\n        phone: $phone\n        position: $position\n        resultPrivacy: $resultPrivacy\n        status: $status\n        sub: $sub\n        username: $username\n        email: $email\n        firstTeam: $firstTeam\n        firstMeeting: $firstMeeting\n      }\n    ) {\n      sub\n    }\n  }\n":
    types.UpdateUserDocument,
  "\n  mutation createTeam($createdBy: ID!, $name: String!) {\n    team: createTeam(input: { createdBy: $createdBy, name: $name }) {\n      id\n    }\n  }\n":
    types.CreateTeamDocument,
  "\n  mutation updateMeetingInvitations(\n    $id: ID!\n    $invitations: [UpdateInvitationsInput]\n  ) {\n    team: updateTeam(input: { id: $id, invitations: $invitations }) {\n      id\n    }\n  }\n":
    types.UpdateMeetingInvitationsDocument,
  "\n  mutation updateTeamQuestionairre(\n    $goals: String\n    $id: ID!\n    $syncHistory: String\n    $teamInSync: String\n    $engagementLevel: String\n  ) {\n    team: updateTeam(\n      input: {\n        goals: $goals\n        id: $id\n        syncHistory: $syncHistory\n        teamInSync: $teamInSync\n        engagementLevel: $engagementLevel\n      }\n    ) {\n      id\n    }\n  }\n":
    types.UpdateTeamQuestionairreDocument,
  "\n  mutation createMeeting(\n    $teamId: String!\n    $userId: String!\n    $name: String!\n    $synchrony: String\n    $dimensions: String\n    $performance: String\n    $sentiment: String\n    $highlights: String\n    $type: String!\n    $url: String!\n    $thumbnail: String\n    $date: String!\n  ) {\n    meeting: createMeeting(\n      input: {\n        teamId: $teamId\n        userId: $userId\n        name: $name\n        synchrony: $synchrony\n        dimensions: $dimensions\n        performance: $performance\n        sentiment: $sentiment\n        highlights: $highlights\n        type: $type\n        url: $url\n        thumbnail: $thumbnail\n        date: $date\n      }\n    ) {\n      id\n      name\n      synchrony\n      dimensions\n      performance\n      sentiment\n      highlights\n      type\n      url\n      thumbnail\n      date\n    }\n  }\n":
    types.CreateMeetingDocument,
  "\n  query getUser($sub: ID!) {\n    user: getUser(sub: $sub) {\n      username\n      updatedAt\n      sub\n      step\n      status\n      resultPrivacy\n      position\n      onboarded\n      lastName\n      lastLogin\n      firstName\n      firstTeam\n      firstMeeting\n      email\n      createdAt\n      country\n      company\n      avatar\n    }\n  }\n":
    types.GetUserDocument,
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
  source: "\n  mutation updateUser(\n    $step: String\n    $onboarded: Boolean\n    $sub: ID!\n    $username: String\n    $email: String\n    $status: String\n    $lastName: String\n    $firstName: String\n    $country: String\n    $company: String\n    $dob: String\n    $avatar: String\n    $phone: String\n    $position: String\n    $resultPrivacy: Boolean\n    $firstTeam: String\n    $firstMeeting: String\n  ) {\n    user: updateUser(\n      input: {\n        step: $step\n        onboarded: $onboarded\n        lastName: $lastName\n        firstName: $firstName\n        country: $country\n        company: $company\n        dob: $dob\n        avatar: $avatar\n        phone: $phone\n        position: $position\n        resultPrivacy: $resultPrivacy\n        status: $status\n        sub: $sub\n        username: $username\n        email: $email\n        firstTeam: $firstTeam\n        firstMeeting: $firstMeeting\n      }\n    ) {\n      sub\n    }\n  }\n",
): (typeof documents)["\n  mutation updateUser(\n    $step: String\n    $onboarded: Boolean\n    $sub: ID!\n    $username: String\n    $email: String\n    $status: String\n    $lastName: String\n    $firstName: String\n    $country: String\n    $company: String\n    $dob: String\n    $avatar: String\n    $phone: String\n    $position: String\n    $resultPrivacy: Boolean\n    $firstTeam: String\n    $firstMeeting: String\n  ) {\n    user: updateUser(\n      input: {\n        step: $step\n        onboarded: $onboarded\n        lastName: $lastName\n        firstName: $firstName\n        country: $country\n        company: $company\n        dob: $dob\n        avatar: $avatar\n        phone: $phone\n        position: $position\n        resultPrivacy: $resultPrivacy\n        status: $status\n        sub: $sub\n        username: $username\n        email: $email\n        firstTeam: $firstTeam\n        firstMeeting: $firstMeeting\n      }\n    ) {\n      sub\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createTeam($createdBy: ID!, $name: String!) {\n    team: createTeam(input: { createdBy: $createdBy, name: $name }) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation createTeam($createdBy: ID!, $name: String!) {\n    team: createTeam(input: { createdBy: $createdBy, name: $name }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation updateMeetingInvitations(\n    $id: ID!\n    $invitations: [UpdateInvitationsInput]\n  ) {\n    team: updateTeam(input: { id: $id, invitations: $invitations }) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation updateMeetingInvitations(\n    $id: ID!\n    $invitations: [UpdateInvitationsInput]\n  ) {\n    team: updateTeam(input: { id: $id, invitations: $invitations }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation updateTeamQuestionairre(\n    $goals: String\n    $id: ID!\n    $syncHistory: String\n    $teamInSync: String\n    $engagementLevel: String\n  ) {\n    team: updateTeam(\n      input: {\n        goals: $goals\n        id: $id\n        syncHistory: $syncHistory\n        teamInSync: $teamInSync\n        engagementLevel: $engagementLevel\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation updateTeamQuestionairre(\n    $goals: String\n    $id: ID!\n    $syncHistory: String\n    $teamInSync: String\n    $engagementLevel: String\n  ) {\n    team: updateTeam(\n      input: {\n        goals: $goals\n        id: $id\n        syncHistory: $syncHistory\n        teamInSync: $teamInSync\n        engagementLevel: $engagementLevel\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createMeeting(\n    $teamId: String!\n    $userId: String!\n    $name: String!\n    $synchrony: String\n    $dimensions: String\n    $performance: String\n    $sentiment: String\n    $highlights: String\n    $type: String!\n    $url: String!\n    $thumbnail: String\n    $date: String!\n  ) {\n    meeting: createMeeting(\n      input: {\n        teamId: $teamId\n        userId: $userId\n        name: $name\n        synchrony: $synchrony\n        dimensions: $dimensions\n        performance: $performance\n        sentiment: $sentiment\n        highlights: $highlights\n        type: $type\n        url: $url\n        thumbnail: $thumbnail\n        date: $date\n      }\n    ) {\n      id\n      name\n      synchrony\n      dimensions\n      performance\n      sentiment\n      highlights\n      type\n      url\n      thumbnail\n      date\n    }\n  }\n",
): (typeof documents)["\n  mutation createMeeting(\n    $teamId: String!\n    $userId: String!\n    $name: String!\n    $synchrony: String\n    $dimensions: String\n    $performance: String\n    $sentiment: String\n    $highlights: String\n    $type: String!\n    $url: String!\n    $thumbnail: String\n    $date: String!\n  ) {\n    meeting: createMeeting(\n      input: {\n        teamId: $teamId\n        userId: $userId\n        name: $name\n        synchrony: $synchrony\n        dimensions: $dimensions\n        performance: $performance\n        sentiment: $sentiment\n        highlights: $highlights\n        type: $type\n        url: $url\n        thumbnail: $thumbnail\n        date: $date\n      }\n    ) {\n      id\n      name\n      synchrony\n      dimensions\n      performance\n      sentiment\n      highlights\n      type\n      url\n      thumbnail\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getUser($sub: ID!) {\n    user: getUser(sub: $sub) {\n      username\n      updatedAt\n      sub\n      step\n      status\n      resultPrivacy\n      position\n      onboarded\n      lastName\n      lastLogin\n      firstName\n      firstTeam\n      firstMeeting\n      email\n      createdAt\n      country\n      company\n      avatar\n    }\n  }\n",
): (typeof documents)["\n  query getUser($sub: ID!) {\n    user: getUser(sub: $sub) {\n      username\n      updatedAt\n      sub\n      step\n      status\n      resultPrivacy\n      position\n      onboarded\n      lastName\n      lastLogin\n      firstName\n      firstTeam\n      firstMeeting\n      email\n      createdAt\n      country\n      company\n      avatar\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
