
import type { ApiError } from "@/types/authentication";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { redirect } from '@tanstack/react-router'
import type { ReactNode } from "react";

interface AuthProps {
    children: ReactNode
}

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: ApiError) => {
            const isUnauthorized = error?.statusCode === 401;

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

const AuthProvider = ({ children }: AuthProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default AuthProvider;
