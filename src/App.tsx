
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './app/providers/AuthProvider';

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
    const authentication = undefined;

    return <RouterProvider router={router} context={{ authentication }}/>
}

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default App;
