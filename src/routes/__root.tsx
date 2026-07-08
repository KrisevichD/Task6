import { getAuthOptions, getRefreshOptions } from '@/app/api/queries';
import Header from '@/components/common/header';
import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async ({ context }) => {
    const accessToken = await context.queryClient.fetchQuery(getRefreshOptions());

    if (!accessToken) return {
      accessToken: null,
      isAuthenticated: false,
      userData: null
    }

    const userData = await context.queryClient.fetchQuery(getAuthOptions(accessToken));

    return {
      accessToken: accessToken,
      isAuthenticated: true,
      userData: userData
    };
  },
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <main className='p-6'>
        <Outlet />
      </main>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
