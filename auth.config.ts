import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export const authConfig = {
  pages: {
    signIn: '/login',
  },
} as NextAuthConfig; 