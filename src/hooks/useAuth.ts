import type { AuthResponse, SessionInfo } from "@/types/authentication";
import { useMutation } from "@tanstack/react-query"
import axios from 'axios';


export function useAuth() {
    const refreshSession = (token: string | null) => {
        return useMutation({
            mutationFn: async () => {
                const response = await axios.post<SessionInfo>(
                    'https://dummyjson.com/auth/refresh',
                    {
                        refreshToken: token ?? '',
                        expiresInMins: 30,
                    },
                    {
                        withCredentials: true,
                    }
                )
                return response.data;
            },
            onSuccess: (data) => {
                console.log("!", data);
            },
            onError: (error) => {
                console.log("!", error.message);
            },
            retry: false,
        })
    }

    const signIn = () => {
        return useMutation({
            mutationFn: async () => {
                const response = await axios.post<AuthResponse>(
                    'https://dummyjson.com/auth/login',
                    {
                        username: 'emilys',
                        password: 'emilyspass',
                        expiresInMins: 30,
                    },
                    {
                        withCredentials: true,
                    }
                )
                return response.data;
            },
            onSuccess: (data) => {
                localStorage.setItem('token', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                console.log("!", data);
            },
            onError: (error) => {
                console.log("!", error.message);
            },
            retry: false,
        })
    }

    return {
        refreshSession,
        signIn,
    }
}