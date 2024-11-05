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

export type AResultSegment = {
  __typename?: 'AResultSegment';
  _: Scalars['Float']['output'];
  a_mean: Scalars['Float']['output'];
  a_std: Scalars['Float']['output'];
  user_0: Scalars['Float']['output'];
  user_1: Scalars['Float']['output'];
};

export type AnchorResultSegment = {
  __typename?: 'AnchorResultSegment';
  _: Scalars['Float']['output'];
  user_locs: Scalars['String']['output'];
};

export type BlinkSegment = {
  __typename?: 'BlinkSegment';
  Overall_mean: Scalars['Float']['output'];
  Overall_std: Scalars['Float']['output'];
  TimeFrame: Scalars['Int']['output'];
  speakers: Array<SpeakerData>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type ContactConnection = {
  __typename?: 'ContactConnection';
  items?: Maybe<Array<Maybe<Contact>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type CreateContactInput = {
  email: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInvitationsInput = {
  email: Scalars['String']['input'];
  invited: Scalars['Boolean']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMeetingInput = {
  date: Scalars['String']['input'];
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['String']['input'];
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateMembersInput = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  invited: Scalars['Boolean']['input'];
  joined: Scalars['Boolean']['input'];
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateNotificationInput = {
  content: Scalars['String']['input'];
  from: Scalars['String']['input'];
  read: Scalars['Boolean']['input'];
  to: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateTeamInput = {
  createdBy: Scalars['ID']['input'];
  engagementLevel?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<Array<InputMaybe<CreateInvitationsInput>>>;
  members?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  syncHistory?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['Float']['input']>;
  teamInSync?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTeamInvitationsInput = {
  accepted?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  onboarded: Scalars['Boolean']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  resultPrivacy: Scalars['Boolean']['input'];
  status: Scalars['String']['input'];
  step?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type DeleteContactInput = {
  id: Scalars['ID']['input'];
};

export type DeleteMeetingInput = {
  id: Scalars['ID']['input'];
};

export type DeleteMembersInput = {
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type DeleteNotificationInput = {
  id: Scalars['ID']['input'];
};

export type DeleteTeamInput = {
  id: Scalars['ID']['input'];
};

export type DeleteTeamInvitationsInput = {
  teamId: Scalars['ID']['input'];
};

export type DeleteUserInput = {
  sub: Scalars['ID']['input'];
};

export type DialogueSegment = {
  __typename?: 'DialogueSegment';
  dialogue: Scalars['String']['output'];
  emotion: Scalars['String']['output'];
  end: Scalars['Float']['output'];
  sentence: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  start: Scalars['Float']['output'];
};

export type Dimensions = {
  __typename?: 'Dimensions';
  absorptionOrTaskEngagement?: Maybe<Scalars['Float']['output']>;
  enjoyment?: Maybe<Scalars['Float']['output']>;
  equalParticipation?: Maybe<Scalars['Float']['output']>;
  sharedGoalCommitment?: Maybe<Scalars['Float']['output']>;
  trustAndPsychologicalSafety?: Maybe<Scalars['Float']['output']>;
};

export type EmotionSegment = {
  __typename?: 'EmotionSegment';
  end_time: Scalars['Float']['output'];
  keyword: Scalars['String']['output'];
  start_time: Scalars['Float']['output'];
  user_id: Scalars['Int']['output'];
  x: Scalars['Int']['output'];
  x2: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
  y2: Scalars['Int']['output'];
};

export type EmotionTextSegment = {
  __typename?: 'EmotionTextSegment';
  emotion: Scalars['String']['output'];
  end: Scalars['Float']['output'];
  sentence: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  start: Scalars['Float']['output'];
};

export type Invitations = {
  __typename?: 'Invitations';
  email: Scalars['String']['output'];
  invited: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type Meeting = {
  __typename?: 'Meeting';
  a_result?: Maybe<Array<Maybe<AResultSegment>>>;
  anchor_result?: Maybe<Array<Maybe<AnchorResultSegment>>>;
  behaviorScore?: Maybe<Scalars['Float']['output']>;
  blink?: Maybe<Array<Maybe<BlinkSegment>>>;
  bodyScore?: Maybe<Scalars['Float']['output']>;
  brainScore?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  dialogue?: Maybe<Array<Maybe<DialogueSegment>>>;
  dimensions?: Maybe<Dimensions>;
  emotion?: Maybe<Array<Maybe<EmotionSegment>>>;
  emotionText?: Maybe<Array<Maybe<EmotionTextSegment>>>;
  highlights?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  participation?: Maybe<Array<Maybe<Participation>>>;
  performance?: Maybe<Scalars['String']['output']>;
  posNegRates?: Maybe<Array<Maybe<PosNegRate>>>;
  pose?: Maybe<Array<Maybe<PoseSegment>>>;
  rppg_result?: Maybe<Array<Maybe<RppgResultSegment>>>;
  sentiment?: Maybe<Scalars['String']['output']>;
  speaker?: Maybe<Array<Maybe<SpeakerSegment>>>;
  speaker_rate_chunks?: Maybe<Array<Maybe<SpeakerRateChunks>>>;
  speaker_rates?: Maybe<Array<Maybe<SpeakerRate>>>;
  speaker_times?: Maybe<Array<Maybe<SpeakerTime>>>;
  summary?: Maybe<Array<Maybe<MeetingSummary>>>;
  synchrony?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  teamId: Scalars['String']['output'];
  team_highlights?: Maybe<Array<Maybe<TeamHighlight>>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  totalScore?: Maybe<Scalars['Float']['output']>;
  transcript?: Maybe<Array<Maybe<TranscriptSegment>>>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  user_highlights?: Maybe<Array<Maybe<UserHighlight>>>;
  v_result?: Maybe<Array<Maybe<VResultSegment>>>;
};

export type MeetingConnection = {
  __typename?: 'MeetingConnection';
  items?: Maybe<Array<Maybe<Meeting>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type MeetingSummary = {
  __typename?: 'MeetingSummary';
  bullets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type Members = {
  __typename?: 'Members';
  dimensions?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Scalars['String']['output']>;
  invited: Scalars['Boolean']['output'];
  joined: Scalars['Boolean']['output'];
  performance?: Maybe<Scalars['String']['output']>;
  sentiment?: Maybe<Scalars['String']['output']>;
  synchrony?: Maybe<Scalars['String']['output']>;
  teamId: Scalars['ID']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type MembersConnection = {
  __typename?: 'MembersConnection';
  items?: Maybe<Array<Maybe<Members>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createContact?: Maybe<Contact>;
  createMeeting?: Maybe<Meeting>;
  createMembers?: Maybe<Members>;
  createNotification?: Maybe<Notification>;
  createTeam?: Maybe<Team>;
  createTeamInvitations?: Maybe<TeamInvitations>;
  createUser?: Maybe<User>;
  deleteContact?: Maybe<Contact>;
  deleteMeeting?: Maybe<Meeting>;
  deleteMembers?: Maybe<Members>;
  deleteNotification?: Maybe<Notification>;
  deleteTeam?: Maybe<Team>;
  deleteTeamInvitations?: Maybe<TeamInvitations>;
  deleteUser?: Maybe<User>;
  inviteTeamInBulk?: Maybe<Array<Maybe<TeamInvitations>>>;
  updateContact?: Maybe<Contact>;
  updateMeeting?: Maybe<Meeting>;
  updateMembers?: Maybe<Members>;
  updateNotification?: Maybe<Notification>;
  updateTeam?: Maybe<Team>;
  updateTeamInvitations?: Maybe<TeamInvitations>;
  updateUser?: Maybe<User>;
};


export type MutationCreateContactArgs = {
  input: CreateContactInput;
};


export type MutationCreateMeetingArgs = {
  input: CreateMeetingInput;
};


export type MutationCreateMembersArgs = {
  input: CreateMembersInput;
};


export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateTeamInvitationsArgs = {
  input: CreateTeamInvitationsInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteContactArgs = {
  input: DeleteContactInput;
};


export type MutationDeleteMeetingArgs = {
  input: DeleteMeetingInput;
};


export type MutationDeleteMembersArgs = {
  input: DeleteMembersInput;
};


export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationDeleteTeamInvitationsArgs = {
  input: DeleteTeamInvitationsInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationInviteTeamInBulkArgs = {
  invitations?: InputMaybe<Array<InputMaybe<CreateTeamInvitationsInput>>>;
};


export type MutationUpdateContactArgs = {
  input: UpdateContactInput;
};


export type MutationUpdateMeetingArgs = {
  input: UpdateMeetingInput;
};


export type MutationUpdateMembersArgs = {
  input: UpdateMembersInput;
};


export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationUpdateTeamInvitationsArgs = {
  input: UpdateTeamInvitationsInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  from: Scalars['String']['output'];
  fromUser?: Maybe<User>;
  id: Scalars['ID']['output'];
  read: Scalars['Boolean']['output'];
  to: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  items?: Maybe<Array<Maybe<Notification>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Participation = {
  __typename?: 'Participation';
  speakerId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
};

export type PosNegRate = {
  __typename?: 'PosNegRate';
  negative_rate_a: Scalars['Float']['output'];
  negative_rate_v: Scalars['Float']['output'];
  positive_rate_a: Scalars['Float']['output'];
  positive_rate_v: Scalars['Float']['output'];
  user: Scalars['String']['output'];
};

export type PoseSegment = {
  __typename?: 'PoseSegment';
  end_time: Scalars['Float']['output'];
  keyword: Scalars['String']['output'];
  person_id: Scalars['Int']['output'];
  start_time: Scalars['Float']['output'];
  x: Scalars['Int']['output'];
  x2: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
  y2: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getContact?: Maybe<Contact>;
  getMeeting?: Maybe<Meeting>;
  getMembers?: Maybe<Members>;
  getNotification?: Maybe<Notification>;
  getTeam?: Maybe<Team>;
  getTeamInvitations?: Maybe<TeamInvitations>;
  getUser?: Maybe<User>;
  listContacts?: Maybe<ContactConnection>;
  listMeetings?: Maybe<MeetingConnection>;
  listMeetingsByUserId?: Maybe<MeetingConnection>;
  listMembers?: Maybe<MembersConnection>;
  listNotifications?: Maybe<NotificationConnection>;
  listTeamInvitations?: Maybe<TeamInvitationsConnection>;
  listTeams?: Maybe<TeamConnection>;
  listTeamsByUserId?: Maybe<TeamConnection>;
  listUsers?: Maybe<UserConnection>;
  queryMeetingsByTeamId?: Maybe<MeetingConnection>;
};


export type QueryGetContactArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMeetingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMembersArgs = {
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTeamInvitationsArgs = {
  teamId: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  sub: Scalars['ID']['input'];
};


export type QueryListContactsArgs = {
  filter?: InputMaybe<TableContactFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListMeetingsArgs = {
  filter?: InputMaybe<TableMeetingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListMeetingsByUserIdArgs = {
  filter?: InputMaybe<TableMeetingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryListMembersArgs = {
  filter?: InputMaybe<TableMembersFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListNotificationsArgs = {
  filter?: InputMaybe<TableNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListTeamInvitationsArgs = {
  filter?: InputMaybe<TableTeamInvitationsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListTeamsArgs = {
  filter?: InputMaybe<TableTeamFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListTeamsByUserIdArgs = {
  filter?: InputMaybe<TableTeamFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryListUsersArgs = {
  filter?: InputMaybe<TableUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryMeetingsByTeamIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type RppgResultSegment = {
  __typename?: 'RppgResultSegment';
  _: Scalars['Float']['output'];
  rppg_mean: Scalars['Float']['output'];
  rppg_std: Scalars['Float']['output'];
  user_0: Scalars['Float']['output'];
  user_1: Scalars['Float']['output'];
};

export type SpeakerChunk = {
  __typename?: 'SpeakerChunk';
  rate?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
};

export type SpeakerData = {
  __typename?: 'SpeakerData';
  X: Scalars['Int']['output'];
  X2: Scalars['Int']['output'];
  Y: Scalars['Int']['output'];
  Y2: Scalars['Int']['output'];
  blink_rate: Scalars['Float']['output'];
  speaker_id: Scalars['String']['output'];
};

export type SpeakerRate = {
  __typename?: 'SpeakerRate';
  rate?: Maybe<Scalars['Float']['output']>;
  speakerId?: Maybe<Scalars['String']['output']>;
};

export type SpeakerRateChunks = {
  __typename?: 'SpeakerRateChunks';
  chunks?: Maybe<Array<Maybe<SpeakerChunk>>>;
  speakerId?: Maybe<Scalars['String']['output']>;
};

export type SpeakerSegment = {
  __typename?: 'SpeakerSegment';
  end_time: Scalars['Float']['output'];
  start_time: Scalars['Float']['output'];
  user_id: Scalars['String']['output'];
  x1: Scalars['Int']['output'];
  x2: Scalars['Int']['output'];
  y1: Scalars['Int']['output'];
  y2: Scalars['Int']['output'];
};

export type SpeakerTime = {
  __typename?: 'SpeakerTime';
  speakerId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateContact?: Maybe<Contact>;
  onCreateMeeting?: Maybe<Meeting>;
  onCreateMembers?: Maybe<Members>;
  onCreateNotification?: Maybe<Notification>;
  onCreateTeam?: Maybe<Team>;
  onCreateTeamInvitations?: Maybe<TeamInvitations>;
  onCreateUser?: Maybe<User>;
  onDeleteContact?: Maybe<Contact>;
  onDeleteMeeting?: Maybe<Meeting>;
  onDeleteMembers?: Maybe<Members>;
  onDeleteNotification?: Maybe<Notification>;
  onDeleteTeam?: Maybe<Team>;
  onDeleteTeamInvitations?: Maybe<TeamInvitations>;
  onDeleteUser?: Maybe<User>;
  onUpdateContact?: Maybe<Contact>;
  onUpdateMeeting?: Maybe<Meeting>;
  onUpdateMembers?: Maybe<Members>;
  onUpdateNotification?: Maybe<Notification>;
  onUpdateTeam?: Maybe<Team>;
  onUpdateTeamInvitations?: Maybe<TeamInvitations>;
  onUpdateUser?: Maybe<User>;
};


export type SubscriptionOnCreateContactArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateMeetingArgs = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateMembersArgs = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['Boolean']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionOnCreateNotificationArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateTeamArgs = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  goals?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invitations?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateTeamInvitationsArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteContactArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteMeetingArgs = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteMembersArgs = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['Boolean']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionOnDeleteNotificationArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteTeamArgs = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  goals?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invitations?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteTeamInvitationsArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateContactArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateMeetingArgs = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateMembersArgs = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['Boolean']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionOnUpdateNotificationArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateTeamArgs = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  goals?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invitations?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateTeamInvitationsArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableContactFilterInput = {
  email?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  message?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  phone?: InputMaybe<TableStringFilterInput>;
  subject?: InputMaybe<TableStringFilterInput>;
};

export type TableFloatFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type TableIdFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableIntFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
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

export type TableMemberTypeFilterInput = {
  dimensions?: InputMaybe<TableStringFilterInput>;
  highlights?: InputMaybe<TableStringFilterInput>;
  invited?: InputMaybe<TableBooleanFilterInput>;
  joined?: InputMaybe<TableBooleanFilterInput>;
  performance?: InputMaybe<TableStringFilterInput>;
  sentiment?: InputMaybe<TableStringFilterInput>;
  synchrony?: InputMaybe<TableStringFilterInput>;
  teamId?: InputMaybe<TableIdFilterInput>;
  userId?: InputMaybe<TableIdFilterInput>;
};

export type TableMembersFilterInput = {
  dimensions?: InputMaybe<TableStringFilterInput>;
  highlights?: InputMaybe<TableStringFilterInput>;
  invited?: InputMaybe<TableBooleanFilterInput>;
  joined?: InputMaybe<TableBooleanFilterInput>;
  performance?: InputMaybe<TableStringFilterInput>;
  sentiment?: InputMaybe<TableStringFilterInput>;
  synchrony?: InputMaybe<TableStringFilterInput>;
  teamId?: InputMaybe<TableIdFilterInput>;
  userId?: InputMaybe<TableIdFilterInput>;
};

export type TableNotificationFilterInput = {
  content?: InputMaybe<TableStringFilterInput>;
  from?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  read?: InputMaybe<TableBooleanFilterInput>;
  to?: InputMaybe<TableStringFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
};

export type TableStringFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
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

export type TableTeamInvitationsFilterInput = {
  accepted?: InputMaybe<TableStringFilterInput>;
  content?: InputMaybe<TableStringFilterInput>;
  email?: InputMaybe<TableStringFilterInput>;
  invited?: InputMaybe<TableStringFilterInput>;
  teamId?: InputMaybe<TableIdFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
  userId?: InputMaybe<TableStringFilterInput>;
  username?: InputMaybe<TableStringFilterInput>;
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
  __typename?: 'Team';
  behaviorScore?: Maybe<Scalars['Float']['output']>;
  bodyScore?: Maybe<Scalars['Float']['output']>;
  brainScore?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['ID']['output'];
  engagementLevel?: Maybe<Scalars['String']['output']>;
  goals?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Maybe<Invitations>>>;
  members?: Maybe<MembersConnection>;
  name: Scalars['String']['output'];
  performance?: Maybe<Scalars['String']['output']>;
  sentiment?: Maybe<Scalars['String']['output']>;
  syncHistory?: Maybe<Scalars['String']['output']>;
  synchrony?: Maybe<Scalars['Float']['output']>;
  teamInSync?: Maybe<Scalars['String']['output']>;
  totalScore?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  items?: Maybe<Array<Maybe<Team>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type TeamHighlight = {
  __typename?: 'TeamHighlight';
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};

export type TeamInvitations = {
  __typename?: 'TeamInvitations';
  accepted?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  invited?: Maybe<Scalars['String']['output']>;
  teamId: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type TeamInvitationsConnection = {
  __typename?: 'TeamInvitationsConnection';
  items?: Maybe<Array<Maybe<TeamInvitations>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type TranscriptSegment = {
  __typename?: 'TranscriptSegment';
  end: Scalars['String']['output'];
  sentence: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  start: Scalars['String']['output'];
};

export type UpdateContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvitationsInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetingInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMembersInput = {
  dimensions?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['Boolean']['input']>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateNotificationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamInput = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  engagementLevel?: InputMaybe<Scalars['String']['input']>;
  goals?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  invitations?: InputMaybe<Array<InputMaybe<UpdateInvitationsInput>>>;
  members?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  syncHistory?: InputMaybe<Scalars['String']['input']>;
  synchrony?: InputMaybe<Scalars['Float']['input']>;
  teamInSync?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamInvitationsInput = {
  accepted?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  invited?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstMeeting?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstTeam?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  resultPrivacy?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  step?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dob?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstMeeting?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  firstTeam?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  invitedByTeam?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  onboarded: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  resultPrivacy: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  step: Scalars['String']['output'];
  stripeCustomerId: Scalars['String']['output'];
  sub: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type UserHighlight = {
  __typename?: 'UserHighlight';
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  speaker?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};

export type VResultSegment = {
  __typename?: 'VResultSegment';
  _: Scalars['Float']['output'];
  user_0: Scalars['Float']['output'];
  user_1: Scalars['Float']['output'];
  v_mean: Scalars['Float']['output'];
  v_std: Scalars['Float']['output'];
};

export type GetMeetingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMeetingQuery = { __typename?: 'Query', meeting?: { __typename?: 'Meeting', createdAt: string, date: string, highlights?: string | null, id: string, name: string, performance?: string | null, sentiment?: string | null, synchrony?: string | null, teamId: string, thumbnail?: string | null, type: string, updatedAt: string, url: string, userId: string, totalScore?: number | null, bodyScore?: number | null, behaviorScore?: number | null, brainScore?: number | null, summary?: Array<{ __typename?: 'MeetingSummary', bullets?: Array<string | null> | null, start?: string | null, end?: string | null, summary?: string | null } | null> | null, team_highlights?: Array<{ __typename?: 'TeamHighlight', start?: string | null, end?: string | null, description?: string | null } | null> | null, user_highlights?: Array<{ __typename?: 'UserHighlight', start?: string | null, end?: string | null, description?: string | null, speaker?: string | null } | null> | null, dimensions?: { __typename?: 'Dimensions', absorptionOrTaskEngagement?: number | null, enjoyment?: number | null, equalParticipation?: number | null, sharedGoalCommitment?: number | null, trustAndPsychologicalSafety?: number | null } | null, posNegRates?: Array<{ __typename?: 'PosNegRate', negative_rate_a: number, negative_rate_v: number, positive_rate_a: number, positive_rate_v: number, user: string } | null> | null, team?: { __typename?: 'Team', bodyScore?: number | null, brainScore?: number | null, totalScore?: number | null, behaviorScore?: number | null } | null, participation?: Array<{ __typename?: 'Participation', speakerId?: string | null, time?: number | null } | null> | null, speaker_rates?: Array<{ __typename?: 'SpeakerRate', speakerId?: string | null, rate?: number | null } | null> | null, speaker_rate_chunks?: Array<{ __typename?: 'SpeakerRateChunks', speakerId?: string | null, chunks?: Array<{ __typename?: 'SpeakerChunk', time?: number | null, rate?: number | null } | null> | null } | null> | null, speaker_times?: Array<{ __typename?: 'SpeakerTime', speakerId?: string | null, time?: number | null } | null> | null } | null };

export type GetTeamQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTeamQuery = { __typename?: 'Query', team?: { __typename?: 'Team', createdAt: string, createdBy: string, engagementLevel?: string | null, goals?: string | null, id: string, name: string, performance?: string | null, sentiment?: string | null, syncHistory?: string | null, synchrony?: number | null, teamInSync?: string | null, updatedAt: string, invitations?: Array<{ __typename?: 'Invitations', email: string, invited: boolean, message?: string | null } | null> | null, members?: { __typename?: 'MembersConnection', items?: Array<{ __typename?: 'Members', userId: string, user?: { __typename?: 'User', avatar?: string | null, email: string, sub: string, firstName?: string | null, lastName?: string | null } | null } | null> | null } | null } | null };

export type ListTeamsByUserIdQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type ListTeamsByUserIdQuery = { __typename?: 'Query', teams?: { __typename?: 'TeamConnection', items?: Array<{ __typename?: 'Team', createdBy: string, engagementLevel?: string | null, goals?: string | null, id: string, name: string, performance?: string | null, sentiment?: string | null, syncHistory?: string | null, createdAt: string, updatedAt: string, synchrony?: number | null, teamInSync?: string | null, members?: { __typename?: 'MembersConnection', items?: Array<{ __typename?: 'Members', userId: string, user?: { __typename?: 'User', avatar?: string | null, email: string, sub: string, firstName?: string | null, lastName?: string | null } | null } | null> | null } | null, invitations?: Array<{ __typename?: 'Invitations', email: string, invited: boolean, message?: string | null } | null> | null } | null> | null } | null };

export type CreateContactMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
}>;


export type CreateContactMutation = { __typename?: 'Mutation', contact?: { __typename?: 'Contact', id: string } | null };

export type DeleteTeamMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTeamMutation = { __typename?: 'Mutation', team?: { __typename?: 'Team', id: string } | null };

export type QueryMeetingsByTeamIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type QueryMeetingsByTeamIdQuery = { __typename?: 'Query', meetings?: { __typename?: 'MeetingConnection', nextToken?: string | null, items?: Array<{ __typename?: 'Meeting', behaviorScore?: number | null, bodyScore?: number | null, brainScore?: number | null, createdAt: string, totalScore?: number | null, date: string } | null> | null } | null };

export type ListMeetingsByUserIdQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type ListMeetingsByUserIdQuery = { __typename?: 'Query', meetings?: { __typename?: 'MeetingConnection', items?: Array<{ __typename?: 'Meeting', date: string, highlights?: string | null, id: string, name: string, createdAt: string, updatedAt: string, sentiment?: string | null, performance?: string | null, synchrony?: string | null, teamId: string, thumbnail?: string | null, type: string, url: string, userId: string, totalScore?: number | null } | null> | null } | null };

export type ListTeamsForDashboardQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type ListTeamsForDashboardQuery = { __typename?: 'Query', teams?: { __typename?: 'TeamConnection', items?: Array<{ __typename?: 'Team', createdBy: string, id: string, name: string, createdAt: string, updatedAt: string, synchrony?: number | null, teamInSync?: string | null, totalScore?: number | null, engagementLevel?: string | null, brainScore?: number | null, bodyScore?: number | null, behaviorScore?: number | null } | null> | null } | null };

export type UpdateUserMutationVariables = Exact<{
  step?: InputMaybe<Scalars['String']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  sub: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  resultPrivacy?: InputMaybe<Scalars['Boolean']['input']>;
  firstTeam?: InputMaybe<Scalars['String']['input']>;
  firstMeeting?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', sub: string } | null };

export type CreateTeamMutationVariables = Exact<{
  createdBy: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', team?: { __typename?: 'Team', id: string } | null };

export type UpdateMeetingInvitationsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  invitations?: InputMaybe<Array<InputMaybe<UpdateInvitationsInput>> | InputMaybe<UpdateInvitationsInput>>;
}>;


export type UpdateMeetingInvitationsMutation = { __typename?: 'Mutation', team?: { __typename?: 'Team', id: string } | null };

export type UpdateTeamQuestionairreMutationVariables = Exact<{
  goals?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  syncHistory?: InputMaybe<Scalars['String']['input']>;
  teamInSync?: InputMaybe<Scalars['String']['input']>;
  engagementLevel?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateTeamQuestionairreMutation = { __typename?: 'Mutation', team?: { __typename?: 'Team', id: string } | null };

export type CreateMeetingMutationVariables = Exact<{
  teamId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  synchrony?: InputMaybe<Scalars['String']['input']>;
  performance?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  id: Scalars['ID']['input'];
}>;


export type CreateMeetingMutation = { __typename?: 'Mutation', meeting?: { __typename?: 'Meeting', id: string, name: string, synchrony?: string | null, performance?: string | null, sentiment?: string | null, highlights?: string | null, type: string, url: string, thumbnail?: string | null, date: string } | null };

export type GetMeetingTranscriptsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMeetingTranscriptsQuery = { __typename?: 'Query', meeting?: { __typename?: 'Meeting', id: string, transcript?: Array<{ __typename?: 'TranscriptSegment', end: string, sentence: string, speaker: string, start: string } | null> | null } | null };

export type RenameTeamMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameTeamMutation = { __typename?: 'Mutation', team?: { __typename?: 'Team', id: string } | null };

export type GetUserQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', username: string, updatedAt: string, sub: string, step: string, status: string, resultPrivacy: boolean, position?: string | null, onboarded: boolean, lastName?: string | null, lastLogin?: string | null, firstName?: string | null, firstTeam?: string | null, firstMeeting?: string | null, email: string, createdAt: string, country?: string | null, company?: string | null, avatar?: string | null } | null };


export const GetMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meeting"},"name":{"kind":"Name","value":"getMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"performance"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"synchrony"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bullets"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team_highlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_highlights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"speaker"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"absorptionOrTaskEngagement"}},{"kind":"Field","name":{"kind":"Name","value":"enjoyment"}},{"kind":"Field","name":{"kind":"Name","value":"equalParticipation"}},{"kind":"Field","name":{"kind":"Name","value":"sharedGoalCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"trustAndPsychologicalSafety"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posNegRates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"negative_rate_a"}},{"kind":"Field","name":{"kind":"Name","value":"negative_rate_v"}},{"kind":"Field","name":{"kind":"Name","value":"positive_rate_a"}},{"kind":"Field","name":{"kind":"Name","value":"positive_rate_v"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyScore"}},{"kind":"Field","name":{"kind":"Name","value":"brainScore"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"behaviorScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speakerId"}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker_rates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speakerId"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker_rate_chunks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speakerId"}},{"kind":"Field","name":{"kind":"Name","value":"chunks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker_times"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"speakerId"}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"bodyScore"}},{"kind":"Field","name":{"kind":"Name","value":"behaviorScore"}},{"kind":"Field","name":{"kind":"Name","value":"brainScore"}}]}}]}}]} as unknown as DocumentNode<GetMeetingQuery, GetMeetingQueryVariables>;
export const GetTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"getTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"engagementLevel"}},{"kind":"Field","name":{"kind":"Name","value":"goals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"invitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"invited"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"sub"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"performance"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"syncHistory"}},{"kind":"Field","name":{"kind":"Name","value":"synchrony"}},{"kind":"Field","name":{"kind":"Name","value":"teamInSync"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetTeamQuery, GetTeamQueryVariables>;
export const ListTeamsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listTeamsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teams"},"name":{"kind":"Name","value":"listTeamsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"engagementLevel"}},{"kind":"Field","name":{"kind":"Name","value":"goals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"performance"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"syncHistory"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"sub"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"invited"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synchrony"}},{"kind":"Field","name":{"kind":"Name","value":"teamInSync"}}]}}]}}]}}]} as unknown as DocumentNode<ListTeamsByUserIdQuery, ListTeamsByUserIdQueryVariables>;
export const CreateContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subject"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contact"},"name":{"kind":"Name","value":"createContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"subject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subject"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateContactMutation, CreateContactMutationVariables>;
export const DeleteTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"deleteTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTeamMutation, DeleteTeamMutationVariables>;
export const QueryMeetingsByTeamIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"queryMeetingsByTeamId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meetings"},"name":{"kind":"Name","value":"queryMeetingsByTeamId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextToken"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"behaviorScore"}},{"kind":"Field","name":{"kind":"Name","value":"bodyScore"}},{"kind":"Field","name":{"kind":"Name","value":"brainScore"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]} as unknown as DocumentNode<QueryMeetingsByTeamIdQuery, QueryMeetingsByTeamIdQueryVariables>;
export const ListMeetingsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listMeetingsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meetings"},"name":{"kind":"Name","value":"listMeetingsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"performance"}},{"kind":"Field","name":{"kind":"Name","value":"synchrony"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}}]}}]}}]}}]} as unknown as DocumentNode<ListMeetingsByUserIdQuery, ListMeetingsByUserIdQueryVariables>;
export const ListTeamsForDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listTeamsForDashboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teams"},"name":{"kind":"Name","value":"listTeamsByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"synchrony"}},{"kind":"Field","name":{"kind":"Name","value":"teamInSync"}},{"kind":"Field","name":{"kind":"Name","value":"totalScore"}},{"kind":"Field","name":{"kind":"Name","value":"engagementLevel"}},{"kind":"Field","name":{"kind":"Name","value":"brainScore"}},{"kind":"Field","name":{"kind":"Name","value":"bodyScore"}},{"kind":"Field","name":{"kind":"Name","value":"behaviorScore"}}]}}]}}]}}]} as unknown as DocumentNode<ListTeamsForDashboardQuery, ListTeamsForDashboardQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"step"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onboarded"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sub"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dob"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resultPrivacy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstTeam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstMeeting"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"step"},"value":{"kind":"Variable","name":{"kind":"Name","value":"step"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"onboarded"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onboarded"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dob"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dob"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"resultPrivacy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resultPrivacy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sub"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstTeam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstTeam"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstMeeting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstMeeting"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sub"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdBy"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const UpdateMeetingInvitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMeetingInvitations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitations"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateInvitationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"updateTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"invitations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitations"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateMeetingInvitationsMutation, UpdateMeetingInvitationsMutationVariables>;
export const UpdateTeamQuestionairreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTeamQuestionairre"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"goals"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"syncHistory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamInSync"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"engagementLevel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"updateTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"goals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"goals"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"syncHistory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"syncHistory"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"teamInSync"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamInSync"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"engagementLevel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"engagementLevel"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateTeamQuestionairreMutation, UpdateTeamQuestionairreMutationVariables>;
export const CreateMeetingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMeeting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"synchrony"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"performance"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"highlights"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thumbnail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meeting"},"name":{"kind":"Name","value":"createMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"synchrony"},"value":{"kind":"Variable","name":{"kind":"Name","value":"synchrony"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"performance"},"value":{"kind":"Variable","name":{"kind":"Name","value":"performance"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sentiment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"highlights"},"value":{"kind":"Variable","name":{"kind":"Name","value":"highlights"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"thumbnail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thumbnail"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"synchrony"}},{"kind":"Field","name":{"kind":"Name","value":"performance"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<CreateMeetingMutation, CreateMeetingMutationVariables>;
export const GetMeetingTranscriptsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeetingTranscripts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meeting"},"name":{"kind":"Name","value":"getMeeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transcript"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"speaker"}},{"kind":"Field","name":{"kind":"Name","value":"start"}}]}}]}}]}}]} as unknown as DocumentNode<GetMeetingTranscriptsQuery, GetMeetingTranscriptsQueryVariables>;
export const RenameTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"renameTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"updateTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RenameTeamMutation, RenameTeamMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sub"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sub"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sub"}},{"kind":"Field","name":{"kind":"Name","value":"step"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"resultPrivacy"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"onboarded"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"firstTeam"}},{"kind":"Field","name":{"kind":"Name","value":"firstMeeting"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;