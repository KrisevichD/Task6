import type { AuthResponse, LoginCredentials } from "@/types/authentication";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useSignIn() {
    return useMutation({
        mutationKey: ['user', 'token'],
        mutationFn: async (credentials: LoginCredentials) => {
            const response = await axios.post<AuthResponse>(
                'https://dummyjson.com/auth/login',
                {
                    username: credentials.login,
                    password: credentials.password,
                    expiresInMins: 1,
                },
                {
                    withCredentials: true,
                }
            )
            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            console.log("!", data);
        },
        onError: (error) => {
            console.log("!", error.message);
        },
        retry: false,
    })
}