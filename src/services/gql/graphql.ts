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

export type Chapter = {
  __typename?: "Chapter";
  content: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  module: Module;
  moduleId: Scalars["ID"]["output"];
  order: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["String"]["output"];
};

export type ChapterConnection = {
  __typename?: "ChapterConnection";
  items?: Maybe<Array<Maybe<Chapter>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type Course = {
  __typename?: "Course";
  about: Scalars["String"]["output"];
  content: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  feedback?: Maybe<Array<Feedback>>;
  id: Scalars["ID"]["output"];
  instructor: User;
  instructorId: Scalars["ID"]["output"];
  isUserEnrolled: Scalars["Boolean"]["output"];
  modules?: Maybe<Array<Module>>;
  moreFromInstructor?: Maybe<Array<Maybe<Course>>>;
  price?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
  thumbnail: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  wysbtc?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type CourseIsUserEnrolledArgs = {
  userId: Scalars["ID"]["input"];
};

export type CourseConnection = {
  __typename?: "CourseConnection";
  items?: Maybe<Array<Maybe<Course>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type CreateChapterInput = {
  content: Scalars["String"]["input"];
  moduleId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateCourseInput = {
  about: Scalars["String"]["input"];
  content: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  instructorId: Scalars["ID"]["input"];
  price?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
  thumbnail: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  wysbtc?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type CreateEnrollmentInput = {
  courseId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type CreateFeedbackInput = {
  authorId: Scalars["ID"]["input"];
  courseId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
  note?: InputMaybe<Scalars["String"]["input"]>;
  rating: Scalars["Int"]["input"];
};

export type CreateModuleInput = {
  content: Scalars["String"]["input"];
  courseId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateUserInput = {
  about?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  createdAt: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  gender?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sub: Scalars["String"]["input"];
};

export type DeleteChapterInput = {
  moduleId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
};

export type DeleteCourseInput = {
  id: Scalars["ID"]["input"];
};

export type DeleteEnrollmentInput = {
  courseId: Scalars["ID"]["input"];
};

export type DeleteFeedbackInput = {
  courseId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
};

export type DeleteModuleInput = {
  courseId: Scalars["ID"]["input"];
};

export type DeleteUserInput = {
  createdAt: Scalars["String"]["input"];
};

export type Enrollment = {
  __typename?: "Enrollment";
  course: Course;
  courseId: Scalars["ID"]["output"];
  createdAt: Scalars["String"]["output"];
  userId: Scalars["ID"]["output"];
};

export type EnrollmentConnection = {
  __typename?: "EnrollmentConnection";
  items?: Maybe<Array<Maybe<Enrollment>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type Feedback = {
  __typename?: "Feedback";
  authorId: Scalars["ID"]["output"];
  courseId: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  note?: Maybe<Scalars["String"]["output"]>;
  rating: Scalars["Int"]["output"];
};

export type FeedbackConnection = {
  __typename?: "FeedbackConnection";
  items?: Maybe<Array<Maybe<Feedback>>>;
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

export type Module = {
  __typename?: "Module";
  chapters?: Maybe<Array<Chapter>>;
  content: Scalars["String"]["output"];
  courseId: Scalars["ID"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type ModuleConnection = {
  __typename?: "ModuleConnection";
  items?: Maybe<Array<Maybe<Module>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createChapter?: Maybe<Chapter>;
  createCourse?: Maybe<Course>;
  createEnrollment?: Maybe<Enrollment>;
  createFeedback?: Maybe<Feedback>;
  createModule?: Maybe<Module>;
  createUser?: Maybe<User>;
  deleteChapter?: Maybe<Chapter>;
  deleteCourse?: Maybe<Course>;
  deleteEnrollment?: Maybe<Enrollment>;
  deleteFeedback?: Maybe<Feedback>;
  deleteModule?: Maybe<Module>;
  deleteUser?: Maybe<User>;
  updateChapter?: Maybe<Chapter>;
  updateCourse?: Maybe<Course>;
  updateEnrollment?: Maybe<Enrollment>;
  updateFeedback?: Maybe<Feedback>;
  updateModule?: Maybe<Module>;
  updateUser?: Maybe<User>;
};

export type MutationCreateChapterArgs = {
  input: CreateChapterInput;
};

export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};

export type MutationCreateEnrollmentArgs = {
  input: CreateEnrollmentInput;
};

export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};

export type MutationCreateModuleArgs = {
  input: CreateModuleInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteChapterArgs = {
  input: DeleteChapterInput;
};

export type MutationDeleteCourseArgs = {
  input: DeleteCourseInput;
};

export type MutationDeleteEnrollmentArgs = {
  input: DeleteEnrollmentInput;
};

export type MutationDeleteFeedbackArgs = {
  input: DeleteFeedbackInput;
};

export type MutationDeleteModuleArgs = {
  input: DeleteModuleInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationUpdateChapterArgs = {
  input: UpdateChapterInput;
};

export type MutationUpdateCourseArgs = {
  input: UpdateCourseInput;
};

export type MutationUpdateEnrollmentArgs = {
  input: UpdateEnrollmentInput;
};

export type MutationUpdateFeedbackArgs = {
  input: UpdateFeedbackInput;
};

export type MutationUpdateModuleArgs = {
  input: UpdateModuleInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  getChapter?: Maybe<Chapter>;
  getChapterById: Chapter;
  getCourse?: Maybe<Course>;
  getEnrollment?: Maybe<Enrollment>;
  getFeedback?: Maybe<Feedback>;
  getModule?: Maybe<Module>;
  getModuleById?: Maybe<Module>;
  getUser?: Maybe<User>;
  listChapters?: Maybe<ChapterConnection>;
  listCourses?: Maybe<CourseConnection>;
  listCoursesByInstructorId?: Maybe<CourseConnection>;
  listEnrollments?: Maybe<EnrollmentConnection>;
  listFeedbacks?: Maybe<FeedbackConnection>;
  listModules?: Maybe<ModuleConnection>;
  listUserEnrollments?: Maybe<EnrollmentConnection>;
  listUsers?: Maybe<UserConnection>;
};

export type QueryGetChapterArgs = {
  moduleId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
};

export type QueryGetChapterByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetCourseArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetEnrollmentArgs = {
  courseId: Scalars["ID"]["input"];
};

export type QueryGetFeedbackArgs = {
  courseId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
};

export type QueryGetModuleArgs = {
  courseId: Scalars["ID"]["input"];
};

export type QueryGetModuleByIdArgs = {
  moduleId: Scalars["ID"]["input"];
};

export type QueryGetUserArgs = {
  sub: Scalars["String"]["input"];
};

export type QueryListChaptersArgs = {
  filter?: InputMaybe<TableChapterFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListCoursesArgs = {
  filter?: InputMaybe<TableCourseFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListCoursesByInstructorIdArgs = {
  instructorId: Scalars["ID"]["input"];
};

export type QueryListEnrollmentsArgs = {
  filter?: InputMaybe<TableEnrollmentFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListFeedbacksArgs = {
  filter?: InputMaybe<TableFeedbackFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListModulesArgs = {
  filter?: InputMaybe<TableModuleFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryListUserEnrollmentsArgs = {
  userId: Scalars["ID"]["input"];
};

export type QueryListUsersArgs = {
  filter?: InputMaybe<TableUserFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  onCreateChapter?: Maybe<Chapter>;
  onCreateCourse?: Maybe<Course>;
  onCreateEnrollment?: Maybe<Enrollment>;
  onCreateFeedback?: Maybe<Feedback>;
  onCreateModule?: Maybe<Module>;
  onDeleteChapter?: Maybe<Chapter>;
  onDeleteCourse?: Maybe<Course>;
  onDeleteEnrollment?: Maybe<Enrollment>;
  onDeleteFeedback?: Maybe<Feedback>;
  onDeleteModule?: Maybe<Module>;
  onUpdateChapter?: Maybe<Chapter>;
  onUpdateCourse?: Maybe<Course>;
  onUpdateEnrollment?: Maybe<Enrollment>;
  onUpdateFeedback?: Maybe<Feedback>;
  onUpdateModule?: Maybe<Module>;
};

export type SubscriptionOnCreateChapterArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  moduleId?: InputMaybe<Scalars["ID"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnCreateCourseArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnCreateEnrollmentArgs = {
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionOnCreateFeedbackArgs = {
  authorId?: InputMaybe<Scalars["ID"]["input"]>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  note?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubscriptionOnCreateModuleArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteChapterArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  moduleId?: InputMaybe<Scalars["ID"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteCourseArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnDeleteEnrollmentArgs = {
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionOnDeleteFeedbackArgs = {
  authorId?: InputMaybe<Scalars["ID"]["input"]>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  note?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubscriptionOnDeleteModuleArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnUpdateChapterArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  moduleId?: InputMaybe<Scalars["ID"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnUpdateCourseArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscriptionOnUpdateEnrollmentArgs = {
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type SubscriptionOnUpdateFeedbackArgs = {
  authorId?: InputMaybe<Scalars["ID"]["input"]>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  note?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubscriptionOnUpdateModuleArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  courseId?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TableChapterFilterInput = {
  content?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  moduleId?: InputMaybe<TableIdFilterInput>;
  order?: InputMaybe<TableIntFilterInput>;
  title?: InputMaybe<TableStringFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
  updatedAt?: InputMaybe<TableStringFilterInput>;
};

export type TableCourseFilterInput = {
  about?: InputMaybe<TableStringFilterInput>;
  content?: InputMaybe<TableStringFilterInput>;
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  price?: InputMaybe<TableIntFilterInput>;
  rating?: InputMaybe<TableFloatFilterInput>;
  thumbnail?: InputMaybe<TableStringFilterInput>;
  title?: InputMaybe<TableStringFilterInput>;
};

export type TableEnrollmentFilterInput = {
  courseId?: InputMaybe<TableIdFilterInput>;
  userId?: InputMaybe<TableIdFilterInput>;
};

export type TableFeedbackFilterInput = {
  authorId?: InputMaybe<TableIdFilterInput>;
  courseId?: InputMaybe<TableIdFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  note?: InputMaybe<TableStringFilterInput>;
  rating?: InputMaybe<TableIntFilterInput>;
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

export type TableModuleFilterInput = {
  content?: InputMaybe<TableStringFilterInput>;
  courseId?: InputMaybe<TableIdFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  title?: InputMaybe<TableStringFilterInput>;
  updatedAt?: InputMaybe<TableStringFilterInput>;
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
  about?: InputMaybe<TableStringFilterInput>;
  avatar?: InputMaybe<TableStringFilterInput>;
  cover?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  email?: InputMaybe<TableStringFilterInput>;
  gender?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  sub?: InputMaybe<TableStringFilterInput>;
};

export type UpdateChapterInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  moduleId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateCourseInput = {
  about?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  price?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  wysbtc?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UpdateEnrollmentInput = {
  courseId: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UpdateFeedbackInput = {
  authorId?: InputMaybe<Scalars["ID"]["input"]>;
  courseId: Scalars["ID"]["input"];
  id: Scalars["ID"]["input"];
  note?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateModuleInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  courseId: Scalars["ID"]["input"];
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserInput = {
  about?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sub: Scalars["String"]["input"];
  twitter?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  about?: Maybe<Scalars["String"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  cover?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  gender?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  sub: Scalars["String"]["output"];
  twitter?: Maybe<Scalars["String"]["output"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type GetCourseQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
}>;

export type GetCourseQuery = {
  __typename?: "Query";
  course?: {
    __typename?: "Course";
    about: string;
    content: string;
    description: string;
    wysbtc?: Array<string> | null;
    rating?: number | null;
    title: string;
    id: string;
    thumbnail: string;
    isUserEnrolled: boolean;
    instructor: {
      __typename?: "User";
      avatar?: string | null;
      about?: string | null;
      name?: string | null;
      sub: string;
    };
    modules?: Array<{
      __typename?: "Module";
      id: string;
      title: string;
      chapters?: Array<{
        __typename?: "Chapter";
        id: string;
        title: string;
      }> | null;
    }> | null;
    moreFromInstructor?: Array<{
      __typename?: "Course";
      id: string;
      thumbnail: string;
      title: string;
      description: string;
    } | null> | null;
  } | null;
};

export type EnrollMutationVariables = Exact<{
  courseId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
}>;

export type EnrollMutation = {
  __typename?: "Mutation";
  enrollment?: {
    __typename?: "Enrollment";
    courseId: string;
    userId: string;
  } | null;
};

export type ListUserEnrollmentsQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
}>;

export type ListUserEnrollmentsQuery = {
  __typename?: "Query";
  enrollments?: {
    __typename?: "EnrollmentConnection";
    items?: Array<{
      __typename?: "Enrollment";
      course: {
        __typename?: "Course";
        description: string;
        id: string;
        price?: number | null;
        thumbnail: string;
        title: string;
        instructor: {
          __typename?: "User";
          name?: string | null;
          avatar?: string | null;
          sub: string;
        };
      };
    } | null> | null;
  } | null;
};

export type ListCoursesQueryVariables = Exact<{ [key: string]: never }>;

export type ListCoursesQuery = {
  __typename?: "Query";
  listCourses?: {
    __typename?: "CourseConnection";
    items?: Array<{
      __typename?: "Course";
      description: string;
      id: string;
      price?: number | null;
      thumbnail: string;
      title: string;
      instructor: {
        __typename?: "User";
        name?: string | null;
        avatar?: string | null;
        sub: string;
      };
    } | null> | null;
  } | null;
};

export type ListCoursesByInstructorIdQueryVariables = Exact<{
  instructorId: Scalars["ID"]["input"];
}>;

export type ListCoursesByInstructorIdQuery = {
  __typename?: "Query";
  courses?: {
    __typename?: "CourseConnection";
    items?: Array<{
      __typename?: "Course";
      description: string;
      id: string;
      price?: number | null;
      thumbnail: string;
      title: string;
      instructor: {
        __typename?: "User";
        name?: string | null;
        avatar?: string | null;
        sub: string;
      };
    } | null> | null;
  } | null;
};

export type GetChapterQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetChapterQuery = {
  __typename?: "Query";
  chapter: {
    __typename?: "Chapter";
    id: string;
    createdAt: string;
    content: string;
    moduleId: string;
    title: string;
    type?: string | null;
    updatedAt: string;
    order: number;
  };
};

export type GetUserQueryVariables = Exact<{
  sub: Scalars["String"]["input"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    about?: string | null;
    avatar?: string | null;
    cover?: string | null;
    createdAt: string;
    email: string;
    name?: string | null;
    gender?: string | null;
    twitter?: string | null;
    sub: string;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  about?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  cover?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sub: Scalars["String"]["input"];
  twitter?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  user?: { __typename?: "User"; sub: string } | null;
};

export type GetModuleByIdQueryVariables = Exact<{
  moduleId: Scalars["ID"]["input"];
}>;

export type GetModuleByIdQuery = {
  __typename?: "Query";
  module?: {
    __typename?: "Module";
    id: string;
    createdAt: string;
    courseId: string;
    content: string;
    title: string;
    updatedAt: string;
    chapters?: Array<{
      __typename?: "Chapter";
      id: string;
      title: string;
    }> | null;
  } | null;
};

export type CreateChapterMutationVariables = Exact<{
  content: Scalars["String"]["input"];
  order: Scalars["Int"]["input"];
  moduleId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
}>;

export type CreateChapterMutation = {
  __typename?: "Mutation";
  createChapter?: { __typename?: "Chapter"; id: string; title: string } | null;
};

export type GetCourseOutlineAndModulesQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCourseOutlineAndModulesQuery = {
  __typename?: "Query";
  course?: {
    __typename?: "Course";
    title: string;
    id: string;
    modules?: Array<{
      __typename?: "Module";
      id: string;
      title: string;
      chapters?: Array<{
        __typename?: "Chapter";
        id: string;
        title: string;
      }> | null;
    }> | null;
  } | null;
};

export type MyMutationMutationVariables = Exact<{
  content: Scalars["String"]["input"];
  courseId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
}>;

export type MyMutationMutation = {
  __typename?: "Mutation";
  createModule?: { __typename?: "Module"; id: string; title: string } | null;
};

export type CreateCourseMutationVariables = Exact<{
  description: Scalars["String"]["input"];
  about: Scalars["String"]["input"];
  instructorId: Scalars["ID"]["input"];
  thumbnail: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  wysbtc?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
}>;

export type CreateCourseMutation = {
  __typename?: "Mutation";
  course?: { __typename?: "Course"; id: string } | null;
};

export type UpdateCourseMutationVariables = Exact<{
  description: Scalars["String"]["input"];
  about: Scalars["String"]["input"];
  thumbnail: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  wysbtc?: InputMaybe<
    Array<Scalars["String"]["input"]> | Scalars["String"]["input"]
  >;
  id: Scalars["ID"]["input"];
}>;

export type UpdateCourseMutation = {
  __typename?: "Mutation";
  course?: { __typename?: "Course"; id: string } | null;
};

export type GetCourseOutlineQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCourseOutlineQuery = {
  __typename?: "Query";
  course?: {
    __typename?: "Course";
    about: string;
    description: string;
    wysbtc?: Array<string> | null;
    rating?: number | null;
    title: string;
    id: string;
    thumbnail: string;
  } | null;
};

export type GetCourseModulesQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCourseModulesQuery = {
  __typename?: "Query";
  course?: {
    __typename?: "Course";
    id: string;
    title: string;
    modules?: Array<{
      __typename?: "Module";
      id: string;
      title: string;
      chapters?: Array<{
        __typename?: "Chapter";
        id: string;
        title: string;
        moduleId: string;
      }> | null;
    }> | null;
  } | null;
};

export const GetCourseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCourse" },
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
            alias: { kind: "Name", value: "course" },
            name: { kind: "Name", value: "getCourse" },
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
                { kind: "Field", name: { kind: "Name", value: "about" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "wysbtc" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "instructor" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "about" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "sub" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "modules" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "chapters" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "isUserEnrolled" },
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
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "moreFromInstructor" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
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
} as unknown as DocumentNode<GetCourseQuery, GetCourseQueryVariables>;
export const EnrollDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "enroll" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "courseId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
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
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "enrollment" },
            name: { kind: "Name", value: "createEnrollment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "courseId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "courseId" },
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
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "courseId" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EnrollMutation, EnrollMutationVariables>;
export const ListUserEnrollmentsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listUserEnrollments" },
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
            alias: { kind: "Name", value: "enrollments" },
            name: { kind: "Name", value: "listUserEnrollments" },
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
                        name: { kind: "Name", value: "course" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "thumbnail" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "instructor" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "avatar" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sub" },
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
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListUserEnrollmentsQuery,
  ListUserEnrollmentsQueryVariables
>;
export const ListCoursesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listCourses" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "listCourses" },
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
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "instructor" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sub" },
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
      },
    },
  ],
} as unknown as DocumentNode<ListCoursesQuery, ListCoursesQueryVariables>;
export const ListCoursesByInstructorIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listCoursesByInstructorId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "instructorId" },
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
            alias: { kind: "Name", value: "courses" },
            name: { kind: "Name", value: "listCoursesByInstructorId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "instructorId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "instructorId" },
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
                        name: { kind: "Name", value: "description" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "instructor" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sub" },
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
      },
    },
  ],
} as unknown as DocumentNode<
  ListCoursesByInstructorIdQuery,
  ListCoursesByInstructorIdQueryVariables
>;
export const GetChapterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getChapter" },
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
            alias: { kind: "Name", value: "chapter" },
            name: { kind: "Name", value: "getChapterById" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "moduleId" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetChapterQuery, GetChapterQueryVariables>;
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
                { kind: "Field", name: { kind: "Name", value: "about" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
                { kind: "Field", name: { kind: "Name", value: "cover" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "gender" } },
                { kind: "Field", name: { kind: "Name", value: "twitter" } },
                { kind: "Field", name: { kind: "Name", value: "sub" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "about" },
          },
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
            name: { kind: "Name", value: "cover" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sub" } },
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
            name: { kind: "Name", value: "twitter" },
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
                      name: { kind: "Name", value: "about" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "about" },
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
                      name: { kind: "Name", value: "cover" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "cover" },
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
                      name: { kind: "Name", value: "sub" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "sub" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "twitter" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "twitter" },
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
export const GetModuleByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getModuleById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "moduleId" },
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
            alias: { kind: "Name", value: "module" },
            name: { kind: "Name", value: "getModuleById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "moduleId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "moduleId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "courseId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "chapters" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
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
} as unknown as DocumentNode<GetModuleByIdQuery, GetModuleByIdQueryVariables>;
export const CreateChapterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createChapter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
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
            name: { kind: "Name", value: "order" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "moduleId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
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
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
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
            name: { kind: "Name", value: "createChapter" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "order" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "order" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "moduleId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "moduleId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
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
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateChapterMutation,
  CreateChapterMutationVariables
>;
export const GetCourseOutlineAndModulesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCourseOutlineAndModules" },
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
            alias: { kind: "Name", value: "course" },
            name: { kind: "Name", value: "getCourse" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "modules" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "chapters" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCourseOutlineAndModulesQuery,
  GetCourseOutlineAndModulesQueryVariables
>;
export const MyMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MyMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
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
            name: { kind: "Name", value: "courseId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "order" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
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
            name: { kind: "Name", value: "createModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "courseId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "courseId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "order" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "order" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
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
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyMutationMutation, MyMutationMutationVariables>;
export const CreateCourseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createCourse" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
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
            name: { kind: "Name", value: "about" },
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
            name: { kind: "Name", value: "instructorId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "thumbnail" },
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
            name: { kind: "Name", value: "title" },
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
            name: { kind: "Name", value: "wysbtc" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "course" },
            name: { kind: "Name", value: "createCourse" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: { kind: "StringValue", value: "", block: false },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "about" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "about" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "instructorId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "instructorId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "price" },
                      value: { kind: "IntValue", value: "0" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "rating" },
                      value: { kind: "IntValue", value: "0" },
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
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "wysbtc" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "wysbtc" },
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
  CreateCourseMutation,
  CreateCourseMutationVariables
>;
export const UpdateCourseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCourse" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
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
            name: { kind: "Name", value: "about" },
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
            name: { kind: "Name", value: "thumbnail" },
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
            name: { kind: "Name", value: "title" },
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
            name: { kind: "Name", value: "wysbtc" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
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
            alias: { kind: "Name", value: "course" },
            name: { kind: "Name", value: "updateCourse" },
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
                      name: { kind: "Name", value: "content" },
                      value: { kind: "StringValue", value: "", block: false },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "about" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "about" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
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
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "wysbtc" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "wysbtc" },
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
  UpdateCourseMutation,
  UpdateCourseMutationVariables
>;
export const GetCourseOutlineDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCourseOutline" },
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
            alias: { kind: "Name", value: "course" },
            name: { kind: "Name", value: "getCourse" },
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
                { kind: "Field", name: { kind: "Name", value: "about" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "wysbtc" } },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "thumbnail" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCourseOutlineQuery,
  GetCourseOutlineQueryVariables
>;
export const GetCourseModulesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCourseModules" },
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
            alias: { kind: "Name", value: "course" },
            name: { kind: "Name", value: "getCourse" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "modules" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "chapters" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "moduleId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCourseModulesQuery,
  GetCourseModulesQueryVariables
>;
