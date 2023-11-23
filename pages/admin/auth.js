// auth.js
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function useRequireAuth() {
  const { data: session, status } = useSession();
  const Router = useRouter();
  if (status === 'loading') {
    // Loading state, show loading indicator or redirect to a loading page
    return <div>Loading...</div>;
  }

  if (!session) {
    // User is not authenticated, redirect to the login page
    Router.push('/admin/login');
  }

  return session;
}
