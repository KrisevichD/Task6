
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider, { AuthContext } from './app/providers/AuthProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { useContext } from 'react';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: { authentication: undefined! }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const AppRouter = () => {
    const authentication = useContext(AuthContext);

    return <RouterProvider router={router} context={{ authentication }}/>
}

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ThemeProvider defaultTheme="system" storageKey="ui-theme">
                <AppRouter />
              </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default App;