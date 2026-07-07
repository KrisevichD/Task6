import api from "@/app/api/auth";
import type { AuthResponse, LoginCredentials, User } from "@/types/authentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";

export default function useSignIn() {
    const queryClient = useQueryClient()
    const search = useSearch({ strict: false });
    const navigate = useNavigate();

    const { mutate: signIn, error, isPending } = useMutation({
        mutationFn: (credentials: LoginCredentials): Promise<AuthResponse> => api.signIn(credentials),
        onSuccess: (data) => {
            const userData: User = {
                id: data.id,
                username: data.username,
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                gender: data.gender,
                image: data.image,
            }

            localStorage.setItem('refreshToken', data.refreshToken)

            queryClient.setQueryData(['auth', 'user'], userData)
            queryClient.setQueryData(['auth', 'token'], data.accessToken)

            const redirectTo = typeof search.redirect === 'string' ? search.redirect : '/';
            navigate({ to: redirectTo })
        },
        onError: (error) => {
            console.log("!", error.message);
        },
        retry: false,
    })
    return {
        signIn,
        error,
        isPending
    }
}