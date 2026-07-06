
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized')({
  beforeLoad: ({ context }) => {
    const isLoggedIn = context.authentication;

    if (!isLoggedIn) {
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
