'use client';

import { ModeToggle } from '@/components/blocks/toggle/mode-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { MainNav } from '../nav/main-nav';
import { UserNav } from '../nav/user-nav';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <MainNav />
        <div className='hidden flex-1 items-center justify-center px-2 md:flex'>
          <div className='relative w-full max-w-md'>
            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input placeholder='Search bounties...' className='pl-8' />
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Button variant='outline' asChild>
              <Link href='/create-bounty'>Create Bounty</Link>
            </Button>
            <ModeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
