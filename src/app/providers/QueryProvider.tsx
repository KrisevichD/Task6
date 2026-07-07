
import type { ApiError } from "@/types/authentication";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { redirect } from '@tanstack/react-router'
import type { ReactNode } from "react";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: ApiError) => {
            const isUnauthorized = error?.status === 401;

            if (isUnauthorized) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                throw redirect({
                    to: '/login',
                    search: { redirect: window.location.pathname },
                })
            }
        },
    }),
    defaultOptions: {
        queries: {
            retry: false
        },
    },
});

interface QueryProps {
    children: ReactNode
}

const QueryProvider = ({ children }: QueryProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default QueryProvider;
