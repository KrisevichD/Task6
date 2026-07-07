import type { AuthResponse, LoginCredentials, SessionInfo, User } from "@/types/authentication";
import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

async function getMe(token: string) {
    const response = await axios.get<User>(
        'https://dummyjson.com/auth/me',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
}

async function refresh() {
    const token = localStorage.getItem('refreshToken');
    console.log('token', token, ")")

    if (token === "" || !token) return null;

    const response = await axios.post<SessionInfo>(
        'https://dummyjson.com/auth/refresh',
        {
            refreshToken: token,
            expiresInMins: 1,
        }
    )
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data.accessToken;
}

async function signIn(credentials: LoginCredentials) {
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
}

const api = {
    signIn
}

export default api;

export const getAuthOptions = (token: string) => queryOptions({
    queryKey: ['auth', 'user'],
    queryFn: async () => getMe(token),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    retry: false,
    enabled: !!token,
})

export const getRefreshOptions = () => queryOptions({
    queryKey: ['auth', 'token'],
    queryFn: async () => refresh(),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
})