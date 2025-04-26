import { auth } from '@workspace/auth';
import CreateBounty from '@workspace/ui/components/compounds/create-bounty';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (!session) {
    return redirect('/signin');
  }

  return (
    <main className='container py-6 mx-auto'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='text-3xl font-bold tracking-tight mb-6'>
          Create a Bounty
        </h1>
        <CreateBounty />
      </div>
    </main>
  );
}
