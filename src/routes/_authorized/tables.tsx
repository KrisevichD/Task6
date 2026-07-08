import Tables from '@/layouts/tables'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/tables')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Tables />
}
