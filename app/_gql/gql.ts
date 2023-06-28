/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  mutation AddUser($email: String, $name: String, $image: String) {\n    insertUser(\n      objects: { email: $email, name: $name, imageUrl: $image }\n      onConflict: { constraint: user_email_key, update_columns: [name, imageUrl] }\n    ) {\n      returning {\n        id\n        email\n        name\n      }\n    }\n  }\n": types.AddUserDocument,
    "\n  query GetUserById($userId: uuid!) {\n    user: userByPk(id: $userId) {\n      id\n      createdAt\n      updatedAt\n      name\n      email\n      imageUrl\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  mutation CreateChat($userId: uuid!, $title: String!) {\n    insertChat(\n      objects: {\n        title: $title\n        chat_members: { data: { userId: $userId }, onConflict: { constraint: chat_members_pkey, update_columns: [] } }\n      }\n    ) {\n      affected_rows\n    }\n  }\n": types.CreateChatDocument,
    "\n  mutation CreateChatMember($chatId: uuid!, $userId: uuid!) {\n    insertChatMembers(objects: { chatId: $chatId, userId: $userId }) {\n      affected_rows\n    }\n  }\n": types.CreateChatMemberDocument,
    "\n  query GetAllChats {\n    chat {\n      title\n      id\n      createdAt\n      updatedAt\n      ownerId\n    }\n  }\n": types.GetAllChatsDocument,
    "\n  query GetChatMessages($chatId: uuid!) {\n    message(where: { chatId: { _eq: $chatId } }) {\n      id\n      content\n      createdAt\n      updatedAt\n      user {\n        id\n        email\n        name\n        imageUrl\n      }\n    }\n  }\n": types.GetChatMessagesDocument,
    "\n  mutation createMessage($chatId: uuid!, $content: String!) {\n    insertMessage(objects: { chatId: $chatId, content: $content }) {\n      returning {\n        content\n      }\n    }\n  }\n": types.CreateMessageDocument,
    "\n  mutation DeleteChat($chatId: uuid!) {\n    deleteChat(where: { id: { _eq: $chatId } }) {\n      affected_rows\n    }\n  }\n": types.DeleteChatDocument,
    "\n  query ChatById($chatId: uuid!) {\n    chat: chatByPk(id: $chatId) {\n      title\n      updatedAt\n      ownerId\n      id\n      createdAt\n      chat_members {\n        user {\n          id\n          email\n          name\n          imageUrl\n        }\n      }\n    }\n  }\n": types.ChatByIdDocument,
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
export function graphql(source: "\n  mutation AddUser($email: String, $name: String, $image: String) {\n    insertUser(\n      objects: { email: $email, name: $name, imageUrl: $image }\n      onConflict: { constraint: user_email_key, update_columns: [name, imageUrl] }\n    ) {\n      returning {\n        id\n        email\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddUser($email: String, $name: String, $image: String) {\n    insertUser(\n      objects: { email: $email, name: $name, imageUrl: $image }\n      onConflict: { constraint: user_email_key, update_columns: [name, imageUrl] }\n    ) {\n      returning {\n        id\n        email\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserById($userId: uuid!) {\n    user: userByPk(id: $userId) {\n      id\n      createdAt\n      updatedAt\n      name\n      email\n      imageUrl\n    }\n  }\n"): (typeof documents)["\n  query GetUserById($userId: uuid!) {\n    user: userByPk(id: $userId) {\n      id\n      createdAt\n      updatedAt\n      name\n      email\n      imageUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChat($userId: uuid!, $title: String!) {\n    insertChat(\n      objects: {\n        title: $title\n        chat_members: { data: { userId: $userId }, onConflict: { constraint: chat_members_pkey, update_columns: [] } }\n      }\n    ) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChat($userId: uuid!, $title: String!) {\n    insertChat(\n      objects: {\n        title: $title\n        chat_members: { data: { userId: $userId }, onConflict: { constraint: chat_members_pkey, update_columns: [] } }\n      }\n    ) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChatMember($chatId: uuid!, $userId: uuid!) {\n    insertChatMembers(objects: { chatId: $chatId, userId: $userId }) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChatMember($chatId: uuid!, $userId: uuid!) {\n    insertChatMembers(objects: { chatId: $chatId, userId: $userId }) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllChats {\n    chat {\n      title\n      id\n      createdAt\n      updatedAt\n      ownerId\n    }\n  }\n"): (typeof documents)["\n  query GetAllChats {\n    chat {\n      title\n      id\n      createdAt\n      updatedAt\n      ownerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChatMessages($chatId: uuid!) {\n    message(where: { chatId: { _eq: $chatId } }) {\n      id\n      content\n      createdAt\n      updatedAt\n      user {\n        id\n        email\n        name\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetChatMessages($chatId: uuid!) {\n    message(where: { chatId: { _eq: $chatId } }) {\n      id\n      content\n      createdAt\n      updatedAt\n      user {\n        id\n        email\n        name\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createMessage($chatId: uuid!, $content: String!) {\n    insertMessage(objects: { chatId: $chatId, content: $content }) {\n      returning {\n        content\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createMessage($chatId: uuid!, $content: String!) {\n    insertMessage(objects: { chatId: $chatId, content: $content }) {\n      returning {\n        content\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChat($chatId: uuid!) {\n    deleteChat(where: { id: { _eq: $chatId } }) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteChat($chatId: uuid!) {\n    deleteChat(where: { id: { _eq: $chatId } }) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ChatById($chatId: uuid!) {\n    chat: chatByPk(id: $chatId) {\n      title\n      updatedAt\n      ownerId\n      id\n      createdAt\n      chat_members {\n        user {\n          id\n          email\n          name\n          imageUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ChatById($chatId: uuid!) {\n    chat: chatByPk(id: $chatId) {\n      title\n      updatedAt\n      ownerId\n      id\n      createdAt\n      chat_members {\n        user {\n          id\n          email\n          name\n          imageUrl\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;