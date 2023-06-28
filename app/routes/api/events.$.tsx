import type { LoaderArgs } from '@remix-run/node';
import { eventStream } from 'remix-utils';
import { requireUser } from '~/services/auth.server';
import { emitter } from '~/services/events.server';

export const loader = async ({ request, params }: LoaderArgs) => {
  await requireUser(request);

  const path = `/${params['*']}`;

  return eventStream(request.signal, (send) => {
    const handler = () => {
      send({ data: Date.now().toString() });
    };

    emitter.addListener(path, handler);
    return () => {
      emitter.removeListener(path, handler);
    };
  });
};
