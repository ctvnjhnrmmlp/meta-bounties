import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { SignInAuthorizationParams } from 'next-auth/react';

export const {
  handlers,
  signIn,
  signOut,
  auth,
  useSession,
}: SignInAuthorizationParams = NextAuth({
  pages: {
    signIn: '/signin',
  },
  providers: [Google({})],
});
