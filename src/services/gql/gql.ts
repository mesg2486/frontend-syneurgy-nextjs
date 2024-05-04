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
  "\n  query getCourse($id: ID!, $userId: ID!) {\n    course: getCourse(id: $id) {\n      about\n      content\n      description\n      wysbtc\n      instructor {\n        avatar\n        about\n        name\n        sub\n      }\n      modules {\n        id\n        title\n        chapters {\n          id\n          title\n        }\n      }\n      rating\n      title\n      id\n      thumbnail\n      isUserEnrolled(userId: $userId)\n      moreFromInstructor {\n        id\n        thumbnail\n        title\n        description\n      }\n    }\n  }\n":
    types.GetCourseDocument,
  "\n  mutation enroll($courseId: ID!, $userId: ID!) {\n    enrollment: createEnrollment(\n      input: { courseId: $courseId, userId: $userId }\n    ) {\n      courseId\n      userId\n    }\n  }\n":
    types.EnrollDocument,
  "\n  query listUserEnrollments($userId: ID!) {\n    enrollments: listUserEnrollments(userId: $userId) {\n      items {\n        course {\n          description\n          id\n          price\n          thumbnail\n          title\n          instructor {\n            name\n            avatar\n            sub\n          }\n        }\n      }\n    }\n  }\n":
    types.ListUserEnrollmentsDocument,
  "\n  query listCourses {\n    listCourses {\n      items {\n        description\n        id\n        price\n        thumbnail\n        title\n        instructor {\n          name\n          avatar\n          sub\n        }\n      }\n    }\n  }\n":
    types.ListCoursesDocument,
  "\n  query listCoursesByInstructorId($instructorId: ID!) {\n    courses: listCoursesByInstructorId(instructorId: $instructorId) {\n      items {\n        description\n        id\n        price\n        thumbnail\n        title\n        instructor {\n          name\n          avatar\n          sub\n        }\n      }\n    }\n  }\n":
    types.ListCoursesByInstructorIdDocument,
  "\n  query getChapter($id: ID!) {\n    chapter: getChapterById(id: $id) {\n      id\n      createdAt\n      content\n      moduleId\n      title\n      type\n      updatedAt\n      order\n    }\n  }\n":
    types.GetChapterDocument,
  "\n  query getUser($sub: String!) {\n    user: getUser(sub: $sub) {\n      about\n      avatar\n      cover\n      createdAt\n      email\n      name\n      gender\n      twitter\n      sub\n    }\n  }\n":
    types.GetUserDocument,
  "\n  mutation UpdateUser(\n    $about: String\n    $avatar: String\n    $cover: String\n    $name: String\n    $sub: String!\n    $twitter: String\n  ) {\n    user: updateUser(\n      input: {\n        about: $about\n        avatar: $avatar\n        cover: $cover\n        name: $name\n        sub: $sub\n        twitter: $twitter\n      }\n    ) {\n      sub\n    }\n  }\n":
    types.UpdateUserDocument,
  "\n  query getModuleById($moduleId: ID!) {\n    module: getModuleById(moduleId: $moduleId) {\n      id\n      createdAt\n      courseId\n      content\n      title\n      updatedAt\n      chapters {\n        id\n        title\n      }\n    }\n  }\n":
    types.GetModuleByIdDocument,
  "\n  mutation createChapter(\n    $content: String!\n    $order: Int!\n    $moduleId: ID!\n    $title: String!\n    $type: String!\n  ) {\n    createChapter(\n      input: {\n        content: $content\n        order: $order\n        moduleId: $moduleId\n        title: $title\n        type: $type\n      }\n    ) {\n      id\n      title\n    }\n  }\n":
    types.CreateChapterDocument,
  "\n  query getCourseOutlineAndModules($id: ID!) {\n    course: getCourse(id: $id) {\n      modules {\n        chapters {\n          id\n          title\n        }\n        id\n        title\n      }\n      title\n      id\n    }\n  }\n":
    types.GetCourseOutlineAndModulesDocument,
  "\n  mutation MyMutation(\n    $content: String!\n    $courseId: ID!\n    $order: Int!\n    $title: String!\n  ) {\n    createModule(\n      input: {\n        content: $content\n        courseId: $courseId\n        order: $order\n        title: $title\n      }\n    ) {\n      id\n      title\n    }\n  }\n":
    types.MyMutationDocument,
  '\n  mutation createCourse(\n    $description: String!\n    $about: String!\n    $instructorId: ID!\n    $thumbnail: String!\n    $title: String!\n    $wysbtc: [String!]\n  ) {\n    course: createCourse(\n      input: {\n        content: ""\n        about: $about\n        description: $description\n        instructorId: $instructorId\n        price: 0\n        rating: 0\n        thumbnail: $thumbnail\n        title: $title\n        wysbtc: $wysbtc\n      }\n    ) {\n      id\n    }\n  }\n':
    types.CreateCourseDocument,
  '\n  mutation updateCourse(\n    $description: String!\n    $about: String!\n    $thumbnail: String!\n    $title: String!\n    $wysbtc: [String!]\n    $id: ID!\n  ) {\n    course: updateCourse(\n      input: {\n        id: $id\n        content: ""\n        about: $about\n        description: $description\n        thumbnail: $thumbnail\n        title: $title\n        wysbtc: $wysbtc\n      }\n    ) {\n      id\n    }\n  }\n':
    types.UpdateCourseDocument,
  "\n  query getCourseOutline($id: ID!) {\n    course: getCourse(id: $id) {\n      about\n      description\n      wysbtc\n      rating\n      title\n      id\n      thumbnail\n    }\n  }\n":
    types.GetCourseOutlineDocument,
  "\n  query getCourseModules($id: ID!) {\n    course: getCourse(id: $id) {\n      id\n      title\n      modules {\n        id\n        title\n        chapters {\n          id\n          title\n          moduleId\n        }\n      }\n      id\n    }\n  }\n":
    types.GetCourseModulesDocument,
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
  source: "\n  query getCourse($id: ID!, $userId: ID!) {\n    course: getCourse(id: $id) {\n      about\n      content\n      description\n      wysbtc\n      instructor {\n        avatar\n        about\n        name\n        sub\n      }\n      modules {\n        id\n        title\n        chapters {\n          id\n          title\n        }\n      }\n      rating\n      title\n      id\n      thumbnail\n      isUserEnrolled(userId: $userId)\n      moreFromInstructor {\n        id\n        thumbnail\n        title\n        description\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getCourse($id: ID!, $userId: ID!) {\n    course: getCourse(id: $id) {\n      about\n      content\n      description\n      wysbtc\n      instructor {\n        avatar\n        about\n        name\n        sub\n      }\n      modules {\n        id\n        title\n        chapters {\n          id\n          title\n        }\n      }\n      rating\n      title\n      id\n      thumbnail\n      isUserEnrolled(userId: $userId)\n      moreFromInstructor {\n        id\n        thumbnail\n        title\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation enroll($courseId: ID!, $userId: ID!) {\n    enrollment: createEnrollment(\n      input: { courseId: $courseId, userId: $userId }\n    ) {\n      courseId\n      userId\n    }\n  }\n",
): (typeof documents)["\n  mutation enroll($courseId: ID!, $userId: ID!) {\n    enrollment: createEnrollment(\n      input: { courseId: $courseId, userId: $userId }\n    ) {\n      courseId\n      userId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query listUserEnrollments($userId: ID!) {\n    enrollments: listUserEnrollments(userId: $userId) {\n      items {\n        course {\n          description\n          id\n          price\n          thumbnail\n          title\n          instructor {\n            name\n            avatar\n            sub\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query listUserEnrollments($userId: ID!) {\n    enrollments: listUserEnrollments(userId: $userId) {\n      items {\n        course {\n          description\n          id\n          price\n          thumbnail\n          title\n          instructor {\n            name\n            avatar\n            sub\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query listCourses {\n    listCourses {\n      items {\n        description\n        id\n        price\n        thumbnail\n        title\n        instructor {\n          name\n          avatar\n          sub\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query listCourses {\n    listCourses {\n      items {\n        description\n        id\n        price\n        thumbnail\n        title\n        instructor {\n          name\n          avatar\n          sub\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query listCoursesByInstructorId($instructorId: ID!) {\n    courses: listCoursesByInstructorId(instructorId: $instructorId) {\n      items {\n        description\n        id\n        price\n        thumbnail\n        title\n        instructor {\n          name\n          avatar\n          sub\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query listCoursesByInstructorId($instructorId: ID!) {\n    courses: listCoursesByInstructorId(instructorId: $instructorId) {\n      items {\n        description\n        id\n        price\n        thumbnail\n        title\n        instructor {\n          name\n          avatar\n          sub\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getChapter($id: ID!) {\n    chapter: getChapterById(id: $id) {\n      id\n      createdAt\n      content\n      moduleId\n      title\n      type\n      updatedAt\n      order\n    }\n  }\n",
): (typeof documents)["\n  query getChapter($id: ID!) {\n    chapter: getChapterById(id: $id) {\n      id\n      createdAt\n      content\n      moduleId\n      title\n      type\n      updatedAt\n      order\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getUser($sub: String!) {\n    user: getUser(sub: $sub) {\n      about\n      avatar\n      cover\n      createdAt\n      email\n      name\n      gender\n      twitter\n      sub\n    }\n  }\n",
): (typeof documents)["\n  query getUser($sub: String!) {\n    user: getUser(sub: $sub) {\n      about\n      avatar\n      cover\n      createdAt\n      email\n      name\n      gender\n      twitter\n      sub\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateUser(\n    $about: String\n    $avatar: String\n    $cover: String\n    $name: String\n    $sub: String!\n    $twitter: String\n  ) {\n    user: updateUser(\n      input: {\n        about: $about\n        avatar: $avatar\n        cover: $cover\n        name: $name\n        sub: $sub\n        twitter: $twitter\n      }\n    ) {\n      sub\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateUser(\n    $about: String\n    $avatar: String\n    $cover: String\n    $name: String\n    $sub: String!\n    $twitter: String\n  ) {\n    user: updateUser(\n      input: {\n        about: $about\n        avatar: $avatar\n        cover: $cover\n        name: $name\n        sub: $sub\n        twitter: $twitter\n      }\n    ) {\n      sub\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getModuleById($moduleId: ID!) {\n    module: getModuleById(moduleId: $moduleId) {\n      id\n      createdAt\n      courseId\n      content\n      title\n      updatedAt\n      chapters {\n        id\n        title\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getModuleById($moduleId: ID!) {\n    module: getModuleById(moduleId: $moduleId) {\n      id\n      createdAt\n      courseId\n      content\n      title\n      updatedAt\n      chapters {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createChapter(\n    $content: String!\n    $order: Int!\n    $moduleId: ID!\n    $title: String!\n    $type: String!\n  ) {\n    createChapter(\n      input: {\n        content: $content\n        order: $order\n        moduleId: $moduleId\n        title: $title\n        type: $type\n      }\n    ) {\n      id\n      title\n    }\n  }\n",
): (typeof documents)["\n  mutation createChapter(\n    $content: String!\n    $order: Int!\n    $moduleId: ID!\n    $title: String!\n    $type: String!\n  ) {\n    createChapter(\n      input: {\n        content: $content\n        order: $order\n        moduleId: $moduleId\n        title: $title\n        type: $type\n      }\n    ) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getCourseOutlineAndModules($id: ID!) {\n    course: getCourse(id: $id) {\n      modules {\n        chapters {\n          id\n          title\n        }\n        id\n        title\n      }\n      title\n      id\n    }\n  }\n",
): (typeof documents)["\n  query getCourseOutlineAndModules($id: ID!) {\n    course: getCourse(id: $id) {\n      modules {\n        chapters {\n          id\n          title\n        }\n        id\n        title\n      }\n      title\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation MyMutation(\n    $content: String!\n    $courseId: ID!\n    $order: Int!\n    $title: String!\n  ) {\n    createModule(\n      input: {\n        content: $content\n        courseId: $courseId\n        order: $order\n        title: $title\n      }\n    ) {\n      id\n      title\n    }\n  }\n",
): (typeof documents)["\n  mutation MyMutation(\n    $content: String!\n    $courseId: ID!\n    $order: Int!\n    $title: String!\n  ) {\n    createModule(\n      input: {\n        content: $content\n        courseId: $courseId\n        order: $order\n        title: $title\n      }\n    ) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation createCourse(\n    $description: String!\n    $about: String!\n    $instructorId: ID!\n    $thumbnail: String!\n    $title: String!\n    $wysbtc: [String!]\n  ) {\n    course: createCourse(\n      input: {\n        content: ""\n        about: $about\n        description: $description\n        instructorId: $instructorId\n        price: 0\n        rating: 0\n        thumbnail: $thumbnail\n        title: $title\n        wysbtc: $wysbtc\n      }\n    ) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation createCourse(\n    $description: String!\n    $about: String!\n    $instructorId: ID!\n    $thumbnail: String!\n    $title: String!\n    $wysbtc: [String!]\n  ) {\n    course: createCourse(\n      input: {\n        content: ""\n        about: $about\n        description: $description\n        instructorId: $instructorId\n        price: 0\n        rating: 0\n        thumbnail: $thumbnail\n        title: $title\n        wysbtc: $wysbtc\n      }\n    ) {\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateCourse(\n    $description: String!\n    $about: String!\n    $thumbnail: String!\n    $title: String!\n    $wysbtc: [String!]\n    $id: ID!\n  ) {\n    course: updateCourse(\n      input: {\n        id: $id\n        content: ""\n        about: $about\n        description: $description\n        thumbnail: $thumbnail\n        title: $title\n        wysbtc: $wysbtc\n      }\n    ) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation updateCourse(\n    $description: String!\n    $about: String!\n    $thumbnail: String!\n    $title: String!\n    $wysbtc: [String!]\n    $id: ID!\n  ) {\n    course: updateCourse(\n      input: {\n        id: $id\n        content: ""\n        about: $about\n        description: $description\n        thumbnail: $thumbnail\n        title: $title\n        wysbtc: $wysbtc\n      }\n    ) {\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getCourseOutline($id: ID!) {\n    course: getCourse(id: $id) {\n      about\n      description\n      wysbtc\n      rating\n      title\n      id\n      thumbnail\n    }\n  }\n",
): (typeof documents)["\n  query getCourseOutline($id: ID!) {\n    course: getCourse(id: $id) {\n      about\n      description\n      wysbtc\n      rating\n      title\n      id\n      thumbnail\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getCourseModules($id: ID!) {\n    course: getCourse(id: $id) {\n      id\n      title\n      modules {\n        id\n        title\n        chapters {\n          id\n          title\n          moduleId\n        }\n      }\n      id\n    }\n  }\n",
): (typeof documents)["\n  query getCourseModules($id: ID!) {\n    course: getCourse(id: $id) {\n      id\n      title\n      modules {\n        id\n        title\n        chapters {\n          id\n          title\n          moduleId\n        }\n      }\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
