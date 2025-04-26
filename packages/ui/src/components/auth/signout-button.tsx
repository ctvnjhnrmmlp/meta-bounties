import { signOut } from '@workspace/auth';
import { Button } from '@workspace/ui/components/button';

export const SignOutButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button type='submit' />
    </form>
  );
};
