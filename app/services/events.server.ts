import { EventEmitter } from 'events';

export const emitter = new EventEmitter();

export const EVENTS = {
  CHAT_CREATE: () => {
    emitter.emit('/app');
  },
  MESSAGE_CREATE: (chatId: string) => {
    emitter.emit(`/app/chat/${chatId}`);
  }
};
