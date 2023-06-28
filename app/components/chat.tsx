import { useFetcher } from '@remix-run/react';
import { PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export default function MyDialog() {
  const [open, setOpen] = useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);

  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.ok) {
      setShowNewTeamDialog(false);
    }
  }, [fetcher]);

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <DialogTrigger asChild>
        <Button
          onSelect={() => {
            setOpen(false);
            setShowNewTeamDialog(true);
          }}
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create Chat
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Chat</DialogTitle>
          <DialogDescription>Create a new chat to talk with your friends</DialogDescription>
        </DialogHeader>
        <fetcher.Form method="post" action="/api/chat/create">
          <div>
            <div className="space-y-4 py-2 pb-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Acme Inc." autoComplete="off" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
            <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
}
