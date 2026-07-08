
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authorized')({
  beforeLoad: async ({ context, location }) => {
    const isAuthenticated = context.isAuthenticated;

    if (!isAuthenticated) {
      const cleanPath = location.pathname.replace(/^\/Task6/, '') || '/'
      throw redirect({
        to: '/login',
        search: { redirect: cleanPath },
      })
    }
  }
})


