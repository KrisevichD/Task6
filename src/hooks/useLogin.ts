import type { ApiError, AuthResponse, LoginCredentials } from '@/types/authorization';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

export function useLogin() {
    const isLoggedIn = () => localStorage.getItem('token') !== null;
    console.log("!",localStorage.getItem('token'))

    const { mutate, isPending, error} = useMutation<AuthResponse, AxiosError<ApiError>, LoginCredentials>({
        mutationFn: async (credentials) => {
            const response = await axios.post<AuthResponse>(
                'https://dummyjson.com/auth/login', 
                {
                    username: credentials.login,
                    password: credentials.password,
                    expiresInMins: 30,
                },
                {
                    withCredentials: true,
                }
            );
            console.log(response);
            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem('token', data.refreshToken);
        },
    });
    return {
        isLoggedIn,
        mutate,
        isPending,
        error
    }

}