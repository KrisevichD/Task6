
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized')({
  beforeLoad: async ({ context }) => {
    const isAuthenticated = context.isAuthenticated;

    if (!isAuthenticated) {
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
