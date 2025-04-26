import { SiteFooter } from '@workspace/ui/components/layouts/footer/site-footer';
import { SiteHeader } from '@workspace/ui/components/layouts/header/site-header';
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
