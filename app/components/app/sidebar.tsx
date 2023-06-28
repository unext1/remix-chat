import { Form, NavLink, useFetcher } from '@remix-run/react';
import cc from 'classcat';
import { LayoutDashboard } from 'lucide-react';
import { type UserType } from '~/services/auth.server';
import { type Getchats } from '~/services/chat.server';

const navLinks = [{ icon: LayoutDashboard, label: 'Dashboard', href: '' }];

export const Navigation = ({ onClick, chats, user }: { onClick: () => void; chats: Getchats; user: UserType }) => {
  const fetcher = useFetcher();

  return (
    <nav className="overflow-auto flex-1 space-y-4 mx-2 px-1">
      <h2 className="text-neutral-50 font-bold text-sm mb-5">Chat App</h2>
      <ul className="pt-5 space-y-2">
        <li className="text-gray-300 pb-2 text-xs uppercase">
          <span>navigation</span>
        </li>
        {navLinks.map((item) => {
          return (
            <li key={item.label} onClick={onClick} className="group">
              <NavLink
                to={item.href}
                end={item.href === ''}
                className={({ isActive }) =>
                  cc({
                    'focus:ring-1 ring-offset-0  ring-neutral-50 flex py-2  rounded-xl pl-3 text-sm': true,
                    'bg-white/25 text-neutral-50': isActive
                  })
                }
              >
                <item.icon aria-hidden="true" className="h-5 my-auto mr-2" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="pt-5 space-y-2">
        <li className="text-gray-300  text-xs uppercase">
          <span>Chats</span>
        </li>
        {chats.chat.map((chat) => {
          return (
            <li key={chat.id} onClick={onClick} className="group ">
              <fetcher.Form method="post" action="/api/chat/delete" className=" flex justify-betwee">
                <NavLink
                  to={`/app/chat/${chat.id}`}
                  className={({ isActive }) =>
                    cc({
                      'focus-within:ring-1 ring-offset-0 w-full ring-neutral-50 py-2 rounded-xl px-3 text-sm': true,
                      'bg-white/25 text-neutral-50': isActive
                    })
                  }
                >
                  <span className="">{chat.title}</span>
                </NavLink>
                {chat.ownerId === user.id ? (
                  <button
                    type="submit"
                    className="py-1 px-1.5 ml-5 text-xs my-auto transition-all hover:bg-white/20 rounded-xl"
                  >
                    X
                  </button>
                ) : (
                  ''
                )}
                <input type="hidden" name="chatId" value={chat.id} />
              </fetcher.Form>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col">
        <Form action="/auth/logout" method="post">
          <button type="submit">Logout</button>
        </Form>
      </div>
    </nav>
  );
};
