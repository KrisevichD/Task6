import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { signIn } from "@/app/api/api";
import type { AuthResponse, ApiError, LoginCredentials, User, SessionInfo } from "@/types/authentication";

export default function useSignIn() {
    const queryClient = useQueryClient()
    const search = useSearch({ strict: false });
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (credentials: LoginCredentials): Promise<AuthResponse> => signIn(credentials),
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
            
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)

            queryClient.setQueryData(['user'], userData)
            queryClient.setQueryData(['token'], data.accessToken)

            const redirectTo = typeof search.redirect === 'string' ? search.redirect : '/';
            navigate({ to: redirectTo })
        },
        onError: (error) => {
            console.log("!", error.message);
        },
        retry: false,
    })
}