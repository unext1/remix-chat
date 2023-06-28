import type { ActionArgs } from '@remix-run/node';
import { z } from 'zod';
import { zx } from 'zodix';
import { requireUser } from '~/services/auth.server';
import { createChat } from '~/services/chat.server';
import { EVENTS } from '~/services/events.server';

export async function action({ request }: ActionArgs) {
  const user = await requireUser(request);
  const { title } = await zx.parseForm(request, {
    title: z.string().min(1)
  });

  if (title) {
    await createChat({ token: user.token, userId: user.id, title });

    EVENTS.CHAT_CREATE();

    return { ok: true };
  }
  return { ok: false };
}
