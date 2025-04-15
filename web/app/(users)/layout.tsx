import { SiteFooter } from '@/components/layouts/footer/site-footer';
import { SiteHeader } from '@/components/layouts/header/site-header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader />
      <div className='flex-1'>{children}</div>
      <SiteFooter />
    </div>
  );
}
