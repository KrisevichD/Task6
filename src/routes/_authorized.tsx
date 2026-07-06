
import { authQueryOptions } from '@/app/api/api'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized')({
  beforeLoad: async ({ context }) => {
    try {
      const user = await context.queryClient.ensureQueryData(authQueryOptions)
      
      console.log(':::>', user);
      return user;
    } catch {
      throw redirect({
        to: '/login',
        search: { redirect: window.location.pathname },
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  
  return (
    <div>
      <Outlet />
    </div>
  )
}
