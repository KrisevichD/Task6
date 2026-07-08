
import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router';
import QueryProvider, { queryClient as client } from './app/providers/QueryProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { routeTree } from './routeTree.gen';
import type { ApiError } from './types/authentication';

const queryClient = client;
const hashHistory = createHashHistory()

const router = createRouter({
  routeTree,
  history: hashHistory,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: { queryClient }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router,
    defaultError: ApiError
  }
}

const App = () => {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <RouterProvider router={router} context={{ queryClient }} />
      </ThemeProvider>
    </QueryProvider>
  )
}

export default App;