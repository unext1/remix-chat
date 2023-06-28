import type { ActionArgs } from '@remix-run/node';
import { z } from 'zod';
import { zx } from 'zodix';
import { requireUser } from '~/services/auth.server';
import { deleteChat } from '~/services/chat.server';
export async function action({ request }: ActionArgs) {
  const user = await requireUser(request);
  const { chatId } = await zx.parseForm(request, {
    chatId: z.string().min(1)
  });

  await deleteChat({ token: user.token, chatId });

  return {};
}
