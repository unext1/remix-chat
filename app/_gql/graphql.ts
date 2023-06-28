/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** columns and relationships of "chat" */
export type Chat = {
  /** An aggregate relationship */
  chatMembersAggregate: ChatMembersAggregate;
  /** An array relationship */
  chat_members: Array<ChatMembers>;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messagesAggregate: MessageAggregate;
  ownerId: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "chat" */
export type ChatChatMembersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


/** columns and relationships of "chat" */
export type ChatChat_MembersArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


/** columns and relationships of "chat" */
export type ChatMessagesArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};


/** columns and relationships of "chat" */
export type ChatMessagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};

/** aggregated selection of "chat" */
export type ChatAggregate = {
  aggregate?: Maybe<ChatAggregateFields>;
  nodes: Array<Chat>;
};

/** aggregate fields of "chat" */
export type ChatAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<ChatMaxFields>;
  min?: Maybe<ChatMinFields>;
};


/** aggregate fields of "chat" */
export type ChatAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChatSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "chat". All fields are combined with a logical 'AND'. */
export type ChatBoolExp = {
  _and?: InputMaybe<Array<ChatBoolExp>>;
  _not?: InputMaybe<ChatBoolExp>;
  _or?: InputMaybe<Array<ChatBoolExp>>;
  chat_members?: InputMaybe<ChatMembersBoolExp>;
  chat_members_aggregate?: InputMaybe<Chat_Members_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  messages?: InputMaybe<MessageBoolExp>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  ownerId?: InputMaybe<UuidComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "chat" */
export type ChatConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'chat_pkey';

/** input type for inserting data into table "chat" */
export type ChatInsertInput = {
  chat_members?: InputMaybe<ChatMembersArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  messages?: InputMaybe<MessageArrRelInsertInput>;
  ownerId?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ChatMaxFields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ownerId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "chat_members" */
export type ChatMembers = {
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "chat_members" */
export type ChatMembersAggregate = {
  aggregate?: Maybe<ChatMembersAggregateFields>;
  nodes: Array<ChatMembers>;
};

/** aggregate fields of "chat_members" */
export type ChatMembersAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<ChatMembersMaxFields>;
  min?: Maybe<ChatMembersMinFields>;
};


/** aggregate fields of "chat_members" */
export type ChatMembersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChatMembersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chat_members" */
export type ChatMembersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Chat_Members_Max_Order_By>;
  min?: InputMaybe<Chat_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_members" */
export type ChatMembersArrRelInsertInput = {
  data: Array<ChatMembersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ChatMembersOnConflict>;
};

/** Boolean expression to filter rows from the table "chat_members". All fields are combined with a logical 'AND'. */
export type ChatMembersBoolExp = {
  _and?: InputMaybe<Array<ChatMembersBoolExp>>;
  _not?: InputMaybe<ChatMembersBoolExp>;
  _or?: InputMaybe<Array<ChatMembersBoolExp>>;
  chat?: InputMaybe<ChatBoolExp>;
  chatId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "chat_members" */
export type ChatMembersConstraint =
  /** unique or primary key constraint on columns "user_id", "chat_id" */
  | 'chat_members_pkey';

/** input type for inserting data into table "chat_members" */
export type ChatMembersInsertInput = {
  chat?: InputMaybe<ChatObjRelInsertInput>;
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ChatMembersMaxFields = {
  chatId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ChatMembersMinFields = {
  chatId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "chat_members" */
export type ChatMembersMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ChatMembers>;
};

/** on_conflict condition type for table "chat_members" */
export type ChatMembersOnConflict = {
  constraint: ChatMembersConstraint;
  update_columns?: Array<ChatMembersUpdateColumn>;
  where?: InputMaybe<ChatMembersBoolExp>;
};

/** Ordering options when selecting data from "chat_members". */
export type ChatMembersOrderBy = {
  chat?: InputMaybe<ChatOrderBy>;
  chatId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: chat_members */
export type ChatMembersPkColumnsInput = {
  chatId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};

/** select columns of table "chat_members" */
export type ChatMembersSelectColumn =
  /** column name */
  | 'chatId'
  /** column name */
  | 'userId';

/** input type for updating data in table "chat_members" */
export type ChatMembersSetInput = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "chat_members" */
export type ChatMembersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChatMembersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChatMembersStreamCursorValueInput = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "chat_members" */
export type ChatMembersUpdateColumn =
  /** column name */
  | 'chatId'
  /** column name */
  | 'userId';

export type ChatMembersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChatMembersSetInput>;
  where: ChatMembersBoolExp;
};

/** aggregate min on columns */
export type ChatMinFields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ownerId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "chat" */
export type ChatMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat>;
};

/** input type for inserting object relation for remote table "chat" */
export type ChatObjRelInsertInput = {
  data: ChatInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ChatOnConflict>;
};

/** on_conflict condition type for table "chat" */
export type ChatOnConflict = {
  constraint: ChatConstraint;
  update_columns?: Array<ChatUpdateColumn>;
  where?: InputMaybe<ChatBoolExp>;
};

/** Ordering options when selecting data from "chat". */
export type ChatOrderBy = {
  chat_membersAggregate?: InputMaybe<ChatMembersAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  messagesAggregate?: InputMaybe<MessageAggregateOrderBy>;
  ownerId?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: chat */
export type ChatPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "chat" */
export type ChatSelectColumn =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ownerId'
  /** column name */
  | 'title'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "chat" */
export type ChatSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ownerId?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "chat" */
export type ChatStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChatStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChatStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ownerId?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "chat" */
export type ChatUpdateColumn =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'ownerId'
  /** column name */
  | 'title'
  /** column name */
  | 'updatedAt';

export type ChatUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChatSetInput>;
  where: ChatBoolExp;
};

/** ordering argument of a cursor */
export type CursorOrdering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "message" */
export type Message = {
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "message" */
export type MessageAggregate = {
  aggregate?: Maybe<MessageAggregateFields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type MessageAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MessageMaxFields>;
  min?: Maybe<MessageMinFields>;
};


/** aggregate fields of "message" */
export type MessageAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MessageSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "message" */
export type MessageAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type MessageArrRelInsertInput = {
  data: Array<MessageInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<MessageOnConflict>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type MessageBoolExp = {
  _and?: InputMaybe<Array<MessageBoolExp>>;
  _not?: InputMaybe<MessageBoolExp>;
  _or?: InputMaybe<Array<MessageBoolExp>>;
  chat?: InputMaybe<ChatBoolExp>;
  chatId?: InputMaybe<UuidComparisonExp>;
  content?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "message" */
export type MessageConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'message_pkey';

/** input type for inserting data into table "message" */
export type MessageInsertInput = {
  chat?: InputMaybe<ChatObjRelInsertInput>;
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type MessageMaxFields = {
  chatId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type MessageMinFields = {
  chatId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "message" */
export type MessageMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type MessageOnConflict = {
  constraint: MessageConstraint;
  update_columns?: Array<MessageUpdateColumn>;
  where?: InputMaybe<MessageBoolExp>;
};

/** Ordering options when selecting data from "message". */
export type MessageOrderBy = {
  chat?: InputMaybe<ChatOrderBy>;
  chatId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: message */
export type MessagePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "message" */
export type MessageSelectColumn =
  /** column name */
  | 'chatId'
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "message" */
export type MessageSetInput = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "message" */
export type MessageStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MessageStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MessageStreamCursorValueInput = {
  chatId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "message" */
export type MessageUpdateColumn =
  /** column name */
  | 'chatId'
  /** column name */
  | 'content'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type MessageUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MessageSetInput>;
  where: MessageBoolExp;
};

/** column ordering options */
export type OrderBy =
  /** in ascending order, nulls last */
  | 'ASC'
  /** in ascending order, nulls first */
  | 'ASC_NULLS_FIRST'
  /** in ascending order, nulls last */
  | 'ASC_NULLS_LAST'
  /** in descending order, nulls first */
  | 'DESC'
  /** in descending order, nulls first */
  | 'DESC_NULLS_FIRST'
  /** in descending order, nulls last */
  | 'DESC_NULLS_LAST';

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user" */
export type User = {
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** An aggregate relationship */
  memberOfChatsAggregate: ChatMembersAggregate;
  /** An array relationship */
  member_of_chats: Array<ChatMembers>;
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messagesAggregate: MessageAggregate;
  name: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "user" */
export type UserMemberOfChatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


/** columns and relationships of "user" */
export type UserMember_Of_ChatsArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


/** columns and relationships of "user" */
export type UserMessagesArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};


/** columns and relationships of "user" */
export type UserMessagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  count: Scalars['Int']['output'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  imageUrl?: InputMaybe<StringComparisonExp>;
  member_of_chats?: InputMaybe<ChatMembersBoolExp>;
  member_of_chats_aggregate?: InputMaybe<Chat_Members_Aggregate_Bool_Exp>;
  messages?: InputMaybe<MessageBoolExp>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  name?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export type UserConstraint =
  /** unique or primary key constraint on columns "email" */
  | 'user_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_pkey';

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  member_of_chats?: InputMaybe<ChatMembersArrRelInsertInput>;
  messages?: InputMaybe<MessageArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  member_of_chatsAggregate?: InputMaybe<ChatMembersAggregateOrderBy>;
  messagesAggregate?: InputMaybe<MessageAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user" */
export type UserSelectColumn =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'imageUrl'
  /** column name */
  | 'name'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "user" */
export type UserUpdateColumn =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'imageUrl'
  /** column name */
  | 'name'
  /** column name */
  | 'updatedAt';

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type Chat_Members_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chat_Members_Aggregate_Bool_Exp_Count>;
};

export type Chat_Members_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ChatMembersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ChatMembersBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "chat_members" */
export type Chat_Members_Max_Order_By = {
  chatId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "chat_members" */
export type Chat_Members_Min_Order_By = {
  chatId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<MessageSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<MessageBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  chatId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  chatId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "chat" */
  deleteChat?: Maybe<ChatMutationResponse>;
  /** delete single row from the table: "chat" */
  deleteChatByPk?: Maybe<Chat>;
  /** delete data from the table: "chat_members" */
  deleteChatMembers?: Maybe<ChatMembersMutationResponse>;
  /** delete single row from the table: "chat_members" */
  deleteChatMembersByPk?: Maybe<ChatMembers>;
  /** delete data from the table: "message" */
  deleteMessage?: Maybe<MessageMutationResponse>;
  /** delete single row from the table: "message" */
  deleteMessageByPk?: Maybe<Message>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** insert data into the table: "chat" */
  insertChat?: Maybe<ChatMutationResponse>;
  /** insert data into the table: "chat_members" */
  insertChatMembers?: Maybe<ChatMembersMutationResponse>;
  /** insert a single row into the table: "chat_members" */
  insertChatMembersOne?: Maybe<ChatMembers>;
  /** insert a single row into the table: "chat" */
  insertChatOne?: Maybe<Chat>;
  /** insert data into the table: "message" */
  insertMessage?: Maybe<MessageMutationResponse>;
  /** insert a single row into the table: "message" */
  insertMessageOne?: Maybe<Message>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** update data of the table: "chat" */
  updateChat?: Maybe<ChatMutationResponse>;
  /** update single row of the table: "chat" */
  updateChatByPk?: Maybe<Chat>;
  /** update multiples rows of table: "chat" */
  updateChatMany?: Maybe<Array<Maybe<ChatMutationResponse>>>;
  /** update data of the table: "chat_members" */
  updateChatMembers?: Maybe<ChatMembersMutationResponse>;
  /** update single row of the table: "chat_members" */
  updateChatMembersByPk?: Maybe<ChatMembers>;
  /** update multiples rows of table: "chat_members" */
  updateChatMembersMany?: Maybe<Array<Maybe<ChatMembersMutationResponse>>>;
  /** update data of the table: "message" */
  updateMessage?: Maybe<MessageMutationResponse>;
  /** update single row of the table: "message" */
  updateMessageByPk?: Maybe<Message>;
  /** update multiples rows of table: "message" */
  updateMessageMany?: Maybe<Array<Maybe<MessageMutationResponse>>>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteChatArgs = {
  where: ChatBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteChatByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteChatMembersArgs = {
  where: ChatMembersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteChatMembersByPkArgs = {
  chatId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteMessageArgs = {
  where: MessageBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteMessageByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsertChatArgs = {
  objects: Array<ChatInsertInput>;
  onConflict?: InputMaybe<ChatOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertChatMembersArgs = {
  objects: Array<ChatMembersInsertInput>;
  onConflict?: InputMaybe<ChatMembersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertChatMembersOneArgs = {
  object: ChatMembersInsertInput;
  onConflict?: InputMaybe<ChatMembersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertChatOneArgs = {
  object: ChatInsertInput;
  onConflict?: InputMaybe<ChatOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMessageArgs = {
  objects: Array<MessageInsertInput>;
  onConflict?: InputMaybe<MessageOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMessageOneArgs = {
  object: MessageInsertInput;
  onConflict?: InputMaybe<MessageOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateChatArgs = {
  _set?: InputMaybe<ChatSetInput>;
  where: ChatBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateChatByPkArgs = {
  _set?: InputMaybe<ChatSetInput>;
  pk_columns: ChatPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateChatManyArgs = {
  updates: Array<ChatUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateChatMembersArgs = {
  _set?: InputMaybe<ChatMembersSetInput>;
  where: ChatMembersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateChatMembersByPkArgs = {
  _set?: InputMaybe<ChatMembersSetInput>;
  pk_columns: ChatMembersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateChatMembersManyArgs = {
  updates: Array<ChatMembersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateMessageArgs = {
  _set?: InputMaybe<MessageSetInput>;
  where: MessageBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateMessageByPkArgs = {
  _set?: InputMaybe<MessageSetInput>;
  pk_columns: MessagePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateMessageManyArgs = {
  updates: Array<MessageUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};

export type Query_Root = {
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch aggregated fields from the table: "chat" */
  chatAggregate: ChatAggregate;
  /** fetch data from the table: "chat" using primary key columns */
  chatByPk?: Maybe<Chat>;
  /** fetch data from the table: "chat_members" */
  chatMembers: Array<ChatMembers>;
  /** An aggregate relationship */
  chatMembersAggregate: ChatMembersAggregate;
  /** fetch data from the table: "chat_members" using primary key columns */
  chatMembersByPk?: Maybe<ChatMembers>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  messageAggregate: MessageAggregate;
  /** fetch data from the table: "message" using primary key columns */
  messageByPk?: Maybe<Message>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};


export type Query_RootChatArgs = {
  distinctOn?: InputMaybe<Array<ChatSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatOrderBy>>;
  where?: InputMaybe<ChatBoolExp>;
};


export type Query_RootChatAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChatSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatOrderBy>>;
  where?: InputMaybe<ChatBoolExp>;
};


export type Query_RootChatByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootChatMembersArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


export type Query_RootChatMembersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


export type Query_RootChatMembersByPkArgs = {
  chatId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Query_RootMessageArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};


export type Query_RootMessageAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};


export type Query_RootMessageByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  /** fetch data from the table: "chat" */
  chat: Array<Chat>;
  /** fetch aggregated fields from the table: "chat" */
  chatAggregate: ChatAggregate;
  /** fetch data from the table: "chat" using primary key columns */
  chatByPk?: Maybe<Chat>;
  /** fetch data from the table: "chat_members" */
  chatMembers: Array<ChatMembers>;
  /** An aggregate relationship */
  chatMembersAggregate: ChatMembersAggregate;
  /** fetch data from the table: "chat_members" using primary key columns */
  chatMembersByPk?: Maybe<ChatMembers>;
  /** fetch data from the table in a streaming manner: "chat_members" */
  chatMembersStream: Array<ChatMembers>;
  /** fetch data from the table in a streaming manner: "chat" */
  chatStream: Array<Chat>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  messageAggregate: MessageAggregate;
  /** fetch data from the table: "message" using primary key columns */
  messageByPk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  messageStream: Array<Message>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
};


export type Subscription_RootChatArgs = {
  distinctOn?: InputMaybe<Array<ChatSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatOrderBy>>;
  where?: InputMaybe<ChatBoolExp>;
};


export type Subscription_RootChatAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChatSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatOrderBy>>;
  where?: InputMaybe<ChatBoolExp>;
};


export type Subscription_RootChatByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootChatMembersArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


export type Subscription_RootChatMembersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChatMembersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMembersOrderBy>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


export type Subscription_RootChatMembersByPkArgs = {
  chatId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootChatMembersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ChatMembersStreamCursorInput>>;
  where?: InputMaybe<ChatMembersBoolExp>;
};


export type Subscription_RootChatStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ChatStreamCursorInput>>;
  where?: InputMaybe<ChatBoolExp>;
};


export type Subscription_RootMessageArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};


export type Subscription_RootMessageAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};


export type Subscription_RootMessageByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMessageStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MessageStreamCursorInput>>;
  where?: InputMaybe<MessageBoolExp>;
};


export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

export type AddUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddUserMutation = { insertUser?: { returning: Array<{ id: string, email: string, name: string }> } | null };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserByIdQuery = { user?: { id: string, createdAt: string, updatedAt: string, name: string, email: string, imageUrl?: string | null } | null };

export type CreateChatMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  title: Scalars['String']['input'];
}>;


export type CreateChatMutation = { insertChat?: { affected_rows: number } | null };

export type CreateChatMemberMutationVariables = Exact<{
  chatId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
}>;


export type CreateChatMemberMutation = { insertChatMembers?: { affected_rows: number } | null };

export type GetAllChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllChatsQuery = { chat: Array<{ title: string, id: string, createdAt: string, updatedAt: string, ownerId: string }> };

export type GetChatMessagesQueryVariables = Exact<{
  chatId: Scalars['uuid']['input'];
}>;


export type GetChatMessagesQuery = { message: Array<{ id: string, content: string, createdAt: string, updatedAt: string, user: { id: string, email: string, name: string, imageUrl?: string | null } }> };

export type CreateMessageMutationVariables = Exact<{
  chatId: Scalars['uuid']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateMessageMutation = { insertMessage?: { returning: Array<{ content: string }> } | null };

export type DeleteChatMutationVariables = Exact<{
  chatId: Scalars['uuid']['input'];
}>;


export type DeleteChatMutation = { deleteChat?: { affected_rows: number } | null };

export type ChatByIdQueryVariables = Exact<{
  chatId: Scalars['uuid']['input'];
}>;


export type ChatByIdQuery = { chat?: { title: string, updatedAt: string, ownerId: string, id: string, createdAt: string, chat_members: Array<{ user: { id: string, email: string, name: string, imageUrl?: string | null } }> } | null };


export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"imageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"user_email_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"name"},{"kind":"EnumValue","value":"imageUrl"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"userByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const CreateChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"chat_members"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"chat_members_pkey"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<CreateChatMutation, CreateChatMutationVariables>;
export const CreateChatMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertChatMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<CreateChatMemberMutation, CreateChatMemberMutationVariables>;
export const GetAllChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllChats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}}]}}]}}]} as unknown as DocumentNode<GetAllChatsQuery, GetAllChatsQueryVariables>;
export const GetChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chatId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetChatMessagesQuery, GetChatMessagesQueryVariables>;
export const CreateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const DeleteChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteChatMutation, DeleteChatMutationVariables>;
export const ChatByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"chat"},"name":{"kind":"Name","value":"chatByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"chat_members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChatByIdQuery, ChatByIdQueryVariables>;