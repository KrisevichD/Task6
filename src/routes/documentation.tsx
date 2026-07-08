import Title from '@/components/common/Title'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documentation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Title title='Documentation' />
    <p>This App is created by Denis Krysevich.</p>
    <p>Stack: TypeScript, React, Vite, Tanstack Router/Query, Tailwind, shadcn.</p>
  </div>
}
