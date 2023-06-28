import { json, type LoaderArgs } from '@remix-run/node';
import { z } from 'zod';
import { zx } from 'zodix';
import { requireUser } from '~/services/auth.server';
import { createMessage, getChatById, getChatMessages } from '~/services/chat.server';

import type { ActionArgs } from '@remix-run/node';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { useEffect, useRef } from 'react';
import { useToast } from '~/components/tost/use-toast';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { useLiveLoader } from '~/hooks/use-live-loader';
import { EVENTS } from '~/services/events.server';

export async function action({ request, params }: ActionArgs) {
  const user = await requireUser(request);

  const { id } = zx.parseParams(params, { id: z.string() });
  const { content } = await zx.parseForm(request, {
    content: z.string()
  });

  if (content.length >= 1) {
    await createMessage({
      token: user.token,
      chatId: id,
      content: content
    });

    EVENTS.MESSAGE_CREATE(id);

    return { message: 'Message sent !' };
  }
  return { message: 'Input is empty' };
}

export async function loader({ request, params }: LoaderArgs) {
  const user = await requireUser(request);
  const { id } = zx.parseParams(params, { id: z.string() });

  const messages = await getChatMessages({ token: user.token, chatId: id });
  const chatData = await getChatById({ token: user.token, chatId: id });
  return json({ messages, chatData, user });
}

export default function ChatPage() {
  const { messages, chatData, user } = useLiveLoader<typeof loader>();
  const { toast } = useToast();
  const actionData = useActionData();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (actionData && actionData.message) {
      toast({
        description: actionData.message
      });
    }
  }, [actionData, toast]);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  const navigation = useNavigation();
  return (
    <>
      <div className="flex ">
        <div className="flex-1 justify-between flex flex-col h-screen">
          <div className="w-full py-5 border-b bg-background border-gray-800 px-5 ">
            <div>
              <h1 className="font-bold tracking-wider text-xl capitalize">{chatData.chat?.title}</h1>
            </div>
          </div>
          <div ref={ref} className="my-10 scroll-smooth p-5 space-y-5 flex-1 overflow-y-scroll w-full mx-auto">
            {messages.message.map((message) => (
              <div
                key={message.id}
                className={`flex space-x-2 ${user.id === message.user.id ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`gap-5 ${user.id === message.user.id ? 'order-1 pl-2' : 'order-0 pr-2'}`}>
                  <img
                    src={message.user.imageUrl ? message.user.imageUrl : '/images/user.png'}
                    alt="user profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <span
                  className={`px-4 py-2 text-sm  ${
                    user.id === message.user.id
                      ? 'justify-end rounded-lg rounded-br-none  bg-blue-500 text-white'
                      : 'justify-start rounded-lg rounded-bl-none  bg-card-foreground text-black'
                  }`}
                >
                  {message.content}
                </span>
              </div>
            ))}
          </div>
          <div className="py-5 bg-white/5 rounded-xl mb-10 px-14  mx-auto ">
            <Form method="post" className="flex space-x-4">
              <Input type="text" name="content" autoComplete="off" className="bg-background" />
              <Button type="submit" disabled={navigation.state === 'submitting' ? true : false}>
                {navigation.state === 'submitting' ? 'Sending' : 'Send'}
              </Button>
            </Form>
          </div>
        </div>
        <div className="w-60 bg-white/5 h-screen-safe space-y-6 p-5">
          <h2 className="font-semibold mb-10">Members</h2>
          {chatData.chat?.chat_members.map(({ user }) => (
            <div key={user.id} className="flex items-center space-x-2">
              <img
                src={user.imageUrl ? user.imageUrl : '/images/user.png'}
                alt="user profile"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
