'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={query}>
        <NextThemesProvider
          enableSystem
          disableTransitionOnChange
          attribute='class'
          defaultTheme='system'
        >
          {children}
        </NextThemesProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
