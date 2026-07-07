import Tables from '@/layouts/Tables'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/tables')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Tables />
}
