import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button asChild variant="secondary">
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}
