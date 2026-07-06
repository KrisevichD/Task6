import type { SessionInfo } from "@/types/authentication";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useRefreshSession() {
    return useMutation({
        mutationKey: ['token'],
        mutationFn: async () => {
            const response = await axios.post<SessionInfo>(
                'https://dummyjson.com/auth/refresh',
                {
                    refreshToken: localStorage.getItem('refreshToken') ?? '',
                    expiresInMins: 30,
                },
                {
                    withCredentials: true,
                }
            )
            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem('accessToken', data.refreshToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            console.log("!", data);
        },
        onError: (error) => {
            console.log("!", error.message);
        },
        retry: false,
    })
}