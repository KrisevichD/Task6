import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized')({
  beforeLoad: ({ context }) => {
    const isAuthenticated = false;

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
      Hello "/_authorized"!
      <Outlet />
    </div>
  )
}
