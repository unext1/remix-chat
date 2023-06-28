import { graphql } from '~/_gql';
import { hasuraClient } from './hasura.server';

const CREATECHAT = graphql(`
  mutation CreateChat($userId: uuid!, $title: String!) {
    insertChat(
      objects: {
        title: $title
        chat_members: { data: { userId: $userId }, onConflict: { constraint: chat_members_pkey, update_columns: [] } }
      }
    ) {
      affected_rows
    }
  }
`);

const CREATECHATMEMBER = graphql(`
  mutation CreateChatMember($chatId: uuid!, $userId: uuid!) {
    insertChatMembers(objects: { chatId: $chatId, userId: $userId }) {
      affected_rows
    }
  }
`);

const GETALLCHATS = graphql(`
  query GetAllChats {
    chat {
      title
      id
      createdAt
      updatedAt
      ownerId
    }
  }
`);

const GETCHATMESSAGES = graphql(`
  query GetChatMessages($chatId: uuid!) {
    message(where: { chatId: { _eq: $chatId } }) {
      id
      content
      createdAt
      updatedAt
      user {
        id
        email
        name
        imageUrl
      }
    }
  }
`);

const CREATEMESSAGE = graphql(`
  mutation createMessage($chatId: uuid!, $content: String!) {
    insertMessage(objects: { chatId: $chatId, content: $content }) {
      returning {
        content
      }
    }
  }
`);

const DELETECHAT = graphql(`
  mutation DeleteChat($chatId: uuid!) {
    deleteChat(where: { id: { _eq: $chatId } }) {
      affected_rows
    }
  }
`);

const GETCHATBYID = graphql(`
  query ChatById($chatId: uuid!) {
    chat: chatByPk(id: $chatId) {
      title
      updatedAt
      ownerId
      id
      createdAt
      chat_members {
        user {
          id
          email
          name
          imageUrl
        }
      }
    }
  }
`);

export type Chat = Awaited<ReturnType<typeof getChats>>;

export const createChat = ({ token, userId, title }: { token: string; userId: string; title: string }) => {
  return hasuraClient({ token }).request(CREATECHAT, { userId, title });
};

export type Getchats = Awaited<ReturnType<typeof getChats>>;

export const getChats = ({ token }: { token: string }) => {
  return hasuraClient({ token }).request(GETALLCHATS);
};

export type ChatMessages = Awaited<ReturnType<typeof getChatMessages>>;

export const getChatMessages = ({ token, chatId }: { token: string; chatId: string }) => {
  return hasuraClient({ token }).request(GETCHATMESSAGES, { chatId });
};
export type CreateMessage = Awaited<ReturnType<typeof createMessage>>;

export const createMessage = ({ token, chatId, content }: { token: string; chatId: string; content: string }) => {
  return hasuraClient({ token }).request(CREATEMESSAGE, { chatId, content });
};

export type ChatType = Awaited<ReturnType<typeof getChatById>>;

export const getChatById = ({ token, chatId }: { token: string; chatId: string }) => {
  return hasuraClient({ token }).request(GETCHATBYID, { chatId });
};

export const deleteChat = ({ token, chatId }: { token: string; chatId: string }) => {
  return hasuraClient({ token }).request(DELETECHAT, { chatId });
};
