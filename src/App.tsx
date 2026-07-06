
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from './app/providers/ThemeProvider';
import AuthProvider, { queryClient as client} from './app/providers/AuthProvider';

const queryClient = client;

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: { queryClient }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <RouterProvider router={router} context={{ queryClient }} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;