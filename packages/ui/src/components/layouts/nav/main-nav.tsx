'use client';

import { cn } from '@workspace/ui/lib/utils';
import { Coins } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Coins className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>Meta Bounties</span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href='/'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Explore
        </Link>
        <Link
          href='/bounties'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/my-bounties')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          My Bounties
        </Link>
        <Link
          href='/profile'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/profile')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Profile
        </Link>
      </nav>
    </div>
  );
}
