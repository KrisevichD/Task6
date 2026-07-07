import api from "@/app/api/auth";
import type { AuthResponse, LoginCredentials, User } from "@/types/authentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";

export default function useSignIn() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const search = useSearch({ strict: false });

    const { mutate: signIn, error, isPending, isError } = useMutation({
        mutationFn: (credentials: LoginCredentials): Promise<AuthResponse> => api.signIn(credentials),
        onSuccess: (data) => {
            const userData: User = {
                id: data.id,
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender,
                image: data.image,
                role: data.role,
            }

            localStorage.setItem('refreshToken', data.refreshToken)

            queryClient.setQueryData(['auth', 'user'], userData)
            queryClient.setQueryData(['auth', 'token'], data.accessToken)

            const redirectTo = typeof search.redirect === 'string' ? search.redirect : '/';
            navigate({ to: redirectTo })
        },
        onError: (error) => {
            return 'Invalid data'
        },
        retry: false,
    })

    return {
        signIn,
        error,
        isPending,
        isError
    }
}