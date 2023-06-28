import { json, type LoaderArgs } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { AppLayout } from '~/components/app/layout';
import { useLiveLoader } from '~/hooks/use-live-loader';

import type { ActionArgs } from '@remix-run/node';
import { requireUser } from '~/services/auth.server';
import { getChats } from '~/services/chat.server';

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  console.log(values);
  return {};
}

export const loader = async ({ request }: LoaderArgs) => {
  const user = await requireUser(request);

  const chats = await getChats({ token: user.token });
  return json({ chats, user });
};

const AppLayouts = () => {
  const { chats, user } = useLiveLoader<typeof loader>();
  return (
    <AppLayout chats={chats} user={user}>
      <Outlet />
    </AppLayout>
  );
};

export default AppLayouts;
