import { Coins } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='border-t py-6 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row'>
        <div className='flex items-center gap-2'>
          <Coins className='h-5 w-5' />
          <p className='text-sm leading-loose text-center md:text-left'>
            Meta Bounties - Chain-Agnostic Bounty Platform
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <Link href='/terms' className='text-sm underline underline-offset-4'>
            Terms
          </Link>
          <Link
            href='/privacy'
            className='text-sm underline underline-offset-4'
          >
            Privacy
          </Link>
          <Link href='/docs' className='text-sm underline underline-offset-4'>
            Docs
          </Link>
        </div>
      </div>
    </footer>
  );
}
