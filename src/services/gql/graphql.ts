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

export type CreateInvitationsInput = {
  email: Scalars["String"]["input"];
  invited: Scalars["Boolean"]["input"];
  message?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateMeetingInput = {
  date: Scalars["String"]["input"];
  dimensions?: InputMaybe<Scalars["String"]["input"]>;
  highlights?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  performance?: InputMaybe<Scalars["String"]["input"]>;
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["String"]["input"]>;
  teamId: Scalars["String"]["input"];
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type CreateTeamInput = {
  createdBy: Scalars["ID"]["input"];
  engagementLevel?: InputMaybe<Scalars["String"]["input"]>;
  goals?: InputMaybe<Scalars["String"]["input"]>;
  invitations?: InputMaybe<Array<InputMaybe<CreateInvitationsInput>>>;
  members?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: Scalars["String"]["input"];
  performance?: InputMaybe<Scalars["String"]["input"]>;
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  syncHistory?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["Float"]["input"]>;
  teamInSync?: InputMaybe<Scalars["String"]["input"]>;
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

export type DeleteMeetingInput = {
  id: Scalars["ID"]["input"];
};

export type DeleteTeamInput = {
  id: Scalars["ID"]["input"];
};

export type DeleteUserInput = {
  sub: Scalars["ID"]["input"];
};

export type Invitations = {
  __typename?: "Invitations";
  email: Scalars["String"]["output"];
  invited: Scalars["Boolean"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
};

export type Meeting = {
  __typename?: "Meeting";
  createdAt: Scalars["String"]["output"];
  date: Scalars["String"]["output"];
  dimensions?: Maybe<Scalars["String"]["output"]>;
  highlights?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  performance?: Maybe<Scalars["String"]["output"]>;
  sentiment?: Maybe<Scalars["String"]["output"]>;
  synchrony?: Maybe<Scalars["String"]["output"]>;
  teamId: Scalars["String"]["output"];
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
};

export type MeetingConnection = {
  __typename?: "MeetingConnection";
  items?: Maybe<Array<Maybe<Meeting>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
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
  createMeeting?: Maybe<Meeting>;
  createTeam?: Maybe<Team>;
  createUser?: Maybe<User>;
  deleteMeeting?: Maybe<Meeting>;
  deleteTeam?: Maybe<Team>;
  deleteUser?: Maybe<User>;
  updateMeeting?: Maybe<Meeting>;
  updateTeam?: Maybe<Team>;
  updateUser?: Maybe<User>;
};

export type MutationCreateMeetingArgs = {
  input: CreateMeetingInput;
};

export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteMeetingArgs = {
  input: DeleteMeetingInput;
};

export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationUpdateMeetingArgs = {
  input: UpdateMeetingInput;
};

export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  getMeeting?: Maybe<Meeting>;
  getTeam?: Maybe<Team>;
  getUser?: Maybe<User>;
  listMeetings?: Maybe<MeetingConnection>;
  listMeetingsByUserId?: Maybe<MeetingConnection>;
  listTeams?: Maybe<TeamConnection>;
  listTeamsByUserId?: Maybe<TeamConnection>;
  listUsers?: Maybe<UserConnection>;
};

export type QueryGetMeetingArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetTeamArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserArgs = {
  sub: Scalars["ID"]["input"];
};

export type QueryListMeetingsArgs = {
  filter?: InputMaybe<TableMeetingFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListMeetingsByUserIdArgs = {
  filter?: InputMaybe<TableMeetingFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["ID"]["input"];
};

export type QueryListTeamsArgs = {
  filter?: InputMaybe<TableTeamFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListTeamsByUserIdArgs = {
  filter?: InputMaybe<TableTeamFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["ID"]["input"];
};

export type QueryListUsersArgs = {
  filter?: InputMaybe<TableUserFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  onCreateMeeting?: Maybe<Meeting>;
  onCreateTeam?: Maybe<Team>;
  onCreateUser?: Maybe<User>;
  onDeleteMeeting?: Maybe<Meeting>;
  onDeleteTeam?: Maybe<Team>;
  onDeleteUser?: Maybe<User>;
  onUpdateMeeting?: Maybe<Meeting>;
  onUpdateTeam?: Maybe<Team>;
  onUpdateUser?: Maybe<User>;
};

export type SubscriptionOnCreateMeetingArgs = {
  dimensions?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  performance?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnCreateTeamArgs = {
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  goals?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  invitations?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnCreateUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  sub?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteMeetingArgs = {
  dimensions?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  performance?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteTeamArgs = {
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  goals?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  invitations?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  lastLogin?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  sub?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnUpdateMeetingArgs = {
  dimensions?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  performance?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnUpdateTeamArgs = {
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  goals?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  invitations?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
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

export type TableMeetingFilterInput = {
  date?: InputMaybe<TableIntFilterInput>;
  dimensions?: InputMaybe<TableStringFilterInput>;
  highlights?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  performance?: InputMaybe<TableStringFilterInput>;
  sentiment?: InputMaybe<TableStringFilterInput>;
  synchrony?: InputMaybe<TableStringFilterInput>;
  teamId?: InputMaybe<TableStringFilterInput>;
  thumbnail?: InputMaybe<TableStringFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
  url?: InputMaybe<TableStringFilterInput>;
  userId?: InputMaybe<TableStringFilterInput>;
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

export type TableTeamFilterInput = {
  createdBy?: InputMaybe<TableIdFilterInput>;
  engagementLevel?: InputMaybe<TableStringFilterInput>;
  goals?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  invitations?: InputMaybe<TableStringFilterInput>;
  members?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  performance?: InputMaybe<TableStringFilterInput>;
  sentiment?: InputMaybe<TableStringFilterInput>;
  syncHistory?: InputMaybe<TableStringFilterInput>;
  synchrony?: InputMaybe<TableFloatFilterInput>;
  teamInSync?: InputMaybe<TableStringFilterInput>;
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

export type Team = {
  __typename?: "Team";
  createdAt: Scalars["String"]["output"];
  createdBy: Scalars["ID"]["output"];
  engagementLevel?: Maybe<Scalars["String"]["output"]>;
  goals?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  invitations?: Maybe<Array<Maybe<Invitations>>>;
  members?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  name: Scalars["String"]["output"];
  performance?: Maybe<Scalars["String"]["output"]>;
  sentiment?: Maybe<Scalars["String"]["output"]>;
  syncHistory?: Maybe<Scalars["String"]["output"]>;
  synchrony?: Maybe<Scalars["Float"]["output"]>;
  teamInSync?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["String"]["output"];
};

export type TeamConnection = {
  __typename?: "TeamConnection";
  items?: Maybe<Array<Maybe<Team>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateInvitationsInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  invited?: InputMaybe<Scalars["Boolean"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateMeetingInput = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  dimensions?: InputMaybe<Scalars["String"]["input"]>;
  highlights?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  performance?: InputMaybe<Scalars["String"]["input"]>;
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["String"]["input"]>;
  teamId?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateTeamInput = {
  createdBy?: InputMaybe<Scalars["ID"]["input"]>;
  engagementLevel?: InputMaybe<Scalars["String"]["input"]>;
  goals?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  invitations?: InputMaybe<Array<InputMaybe<UpdateInvitationsInput>>>;
  members?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  performance?: InputMaybe<Scalars["String"]["input"]>;
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  syncHistory?: InputMaybe<Scalars["String"]["input"]>;
  synchrony?: InputMaybe<Scalars["Float"]["input"]>;
  teamInSync?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  company?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  dob?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstMeeting?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  firstTeam?: InputMaybe<Scalars["String"]["input"]>;
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
  firstMeeting?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  firstTeam?: Maybe<Scalars["String"]["output"]>;
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

export type GetTeamQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetTeamQuery = {
  __typename?: "Query";
  team?: {
    __typename?: "Team";
    createdAt: string;
    createdBy: string;
    engagementLevel?: string | null;
    goals?: string | null;
    id: string;
    members?: Array<string | null> | null;
    name: string;
    performance?: string | null;
    sentiment?: string | null;
    syncHistory?: string | null;
    synchrony?: number | null;
    teamInSync?: string | null;
    updatedAt: string;
    invitations?: Array<{
      __typename?: "Invitations";
      email: string;
      invited: boolean;
      message?: string | null;
    } | null> | null;
  } | null;
};

export type ListTeamsByUserIdQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
}>;

export type ListTeamsByUserIdQuery = {
  __typename?: "Query";
  teams?: {
    __typename?: "TeamConnection";
    items?: Array<{
      __typename?: "Team";
      createdBy: string;
      engagementLevel?: string | null;
      goals?: string | null;
      id: string;
      members?: Array<string | null> | null;
      name: string;
      performance?: string | null;
      sentiment?: string | null;
      syncHistory?: string | null;
      createdAt: string;
      updatedAt: string;
      synchrony?: number | null;
      teamInSync?: string | null;
      invitations?: Array<{
        __typename?: "Invitations";
        email: string;
        invited: boolean;
        message?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ListMeetingsByUserIdQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
}>;

export type ListMeetingsByUserIdQuery = {
  __typename?: "Query";
  meetings?: {
    __typename?: "MeetingConnection";
    items?: Array<{
      __typename?: "Meeting";
      date: string;
      dimensions?: string | null;
      highlights?: string | null;
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      sentiment?: string | null;
      performance?: string | null;
      synchrony?: string | null;
      teamId: string;
      thumbnail?: string | null;
      type: string;
      url: string;
      userId: string;
    } | null> | null;
  } | null;
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
  firstTeam?: InputMaybe<Scalars["String"]["input"]>;
  firstMeeting?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  user?: { __typename?: "User"; sub: string } | null;
};

export type CreateTeamMutationVariables = Exact<{
  createdBy: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
}>;

export type CreateTeamMutation = {
  __typename?: "Mutation";
  team?: { __typename?: "Team"; id: string } | null;
};

export type UpdateMeetingInvitationsMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  invitations?: InputMaybe<
    | Array<InputMaybe<UpdateInvitationsInput>>
    | InputMaybe<UpdateInvitationsInput>
  >;
}>;

export type UpdateMeetingInvitationsMutation = {
  __typename?: "Mutation";
  team?: { __typename?: "Team"; id: string } | null;
};

export type UpdateTeamQuestionairreMutationVariables = Exact<{
  goals?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  syncHistory?: InputMaybe<Scalars["String"]["input"]>;
  teamInSync?: InputMaybe<Scalars["String"]["input"]>;
  engagementLevel?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateTeamQuestionairreMutation = {
  __typename?: "Mutation";
  team?: { __typename?: "Team"; id: string } | null;
};

export type CreateMeetingMutationVariables = Exact<{
  teamId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  synchrony?: InputMaybe<Scalars["String"]["input"]>;
  dimensions?: InputMaybe<Scalars["String"]["input"]>;
  performance?: InputMaybe<Scalars["String"]["input"]>;
  sentiment?: InputMaybe<Scalars["String"]["input"]>;
  highlights?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  date: Scalars["String"]["input"];
}>;

export type CreateMeetingMutation = {
  __typename?: "Mutation";
  meeting?: {
    __typename?: "Meeting";
    id: string;
    name: string;
    synchrony?: string | null;
    dimensions?: string | null;
    performance?: string | null;
    sentiment?: string | null;
    highlights?: string | null;
    type: string;
    url: string;
    thumbnail?: string | null;
    date: string;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  sub: Scalars["ID"]["input"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    username: string;
    updatedAt: string;
    sub: string;
    step: string;
    status: string;
    resultPrivacy: boolean;
    position?: string | null;
    onboarded: boolean;
    lastName?: string | null;
    lastLogin?: string | null;
    firstName?: string | null;
    firstTeam?: string | null;
    firstMeeting?: string | null;
    email: string;
    createdAt: string;
    country?: string | null;
    company?: string | null;
    avatar?: string | null;
  } | null;
};

export const GetTeamDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTeam" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "team" },
            name: { kind: "Name", value: "getTeam" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdBy" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "engagementLevel" },
                },
                { kind: "Field", name: { kind: "Name", value: "goals" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invitations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "invited" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "members" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "performance" } },
                { kind: "Field", name: { kind: "Name", value: "sentiment" } },
                { kind: "Field", name: { kind: "Name", value: "syncHistory" } },
                { kind: "Field", name: { kind: "Name", value: "synchrony" } },
                { kind: "Field", name: { kind: "Name", value: "teamInSync" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTeamQuery, GetTeamQueryVariables>;
export const ListTeamsByUserIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listTeamsByUserId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "teams" },
            name: { kind: "Name", value: "listTeamsByUserId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdBy" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "engagementLevel" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "goals" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "members" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "performance" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sentiment" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "syncHistory" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "invitations" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "invited" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "message" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "synchrony" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamInSync" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListTeamsByUserIdQuery,
  ListTeamsByUserIdQueryVariables
>;
export const ListMeetingsByUserIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listMeetingsByUserId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "meetings" },
            name: { kind: "Name", value: "listMeetingsByUserId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dimensions" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highlights" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sentiment" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "performance" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "synchrony" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "teamId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListMeetingsByUserIdQuery,
  ListMeetingsByUserIdQueryVariables
>;
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
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstTeam" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "firstMeeting" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
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
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "firstTeam" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "firstTeam" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "firstMeeting" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "firstMeeting" },
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
export const CreateTeamDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createTeam" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "createdBy" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "team" },
            name: { kind: "Name", value: "createTeam" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "createdBy" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "createdBy" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const UpdateMeetingInvitationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateMeetingInvitations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "invitations" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateInvitationsInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "team" },
            name: { kind: "Name", value: "updateTeam" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "invitations" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "invitations" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateMeetingInvitationsMutation,
  UpdateMeetingInvitationsMutationVariables
>;
export const UpdateTeamQuestionairreDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateTeamQuestionairre" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "goals" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "syncHistory" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "teamInSync" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "engagementLevel" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "team" },
            name: { kind: "Name", value: "updateTeam" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "goals" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "goals" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "syncHistory" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "syncHistory" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "teamInSync" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "teamInSync" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "engagementLevel" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "engagementLevel" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateTeamQuestionairreMutation,
  UpdateTeamQuestionairreMutationVariables
>;
export const CreateMeetingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createMeeting" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "teamId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "synchrony" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "dimensions" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "performance" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sentiment" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "highlights" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "url" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "thumbnail" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "date" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "meeting" },
            name: { kind: "Name", value: "createMeeting" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "teamId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "teamId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "synchrony" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "synchrony" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "dimensions" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "dimensions" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "performance" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "performance" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "sentiment" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "sentiment" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "highlights" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "highlights" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "type" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "url" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "url" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "thumbnail" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "thumbnail" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "date" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "synchrony" } },
                { kind: "Field", name: { kind: "Name", value: "dimensions" } },
                { kind: "Field", name: { kind: "Name", value: "performance" } },
                { kind: "Field", name: { kind: "Name", value: "sentiment" } },
                { kind: "Field", name: { kind: "Name", value: "highlights" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateMeetingMutation,
  CreateMeetingMutationVariables
>;
export const GetUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sub" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "user" },
            name: { kind: "Name", value: "getUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sub" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sub" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "sub" } },
                { kind: "Field", name: { kind: "Name", value: "step" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resultPrivacy" },
                },
                { kind: "Field", name: { kind: "Name", value: "position" } },
                { kind: "Field", name: { kind: "Name", value: "onboarded" } },
                { kind: "Field", name: { kind: "Name", value: "lastName" } },
                { kind: "Field", name: { kind: "Name", value: "lastLogin" } },
                { kind: "Field", name: { kind: "Name", value: "firstName" } },
                { kind: "Field", name: { kind: "Name", value: "firstTeam" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "firstMeeting" },
                },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "country" } },
                { kind: "Field", name: { kind: "Name", value: "company" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
