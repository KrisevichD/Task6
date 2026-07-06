import type { AuthResponse, LoginCredentials, SessionInfo, User } from "@/types/authentication";
import { queryOptions } from "@tanstack/react-query";
import axios from "axios";


export const api = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials: true
})

async function getMe() {
    const response = await axios.get<User>(
        'https://dummyjson.com/auth/me',
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    );
    return response.data;
}

async function refresh() {
    const response = await axios.post<SessionInfo>(
        'https://dummyjson.com/auth/refresh',
        {
            refreshToken: localStorage.getItem('refreshToken') ?? '',
            expiresInMins: 1,
        }
    )
    return response.data;
}

export const signIn = async (credentials: LoginCredentials) => {
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

export const authQueryOptions = queryOptions({
  queryKey: ['user'],
  queryFn: async () => getMe(),
  staleTime: 1000,
  refetchOnWindowFocus: true,
  retry: false,
})

export const refreshSessionQueryOptions = queryOptions({
  queryKey: ['token'],
  queryFn: async () => refresh(),
  staleTime: 1000,
  refetchOnWindowFocus: true,
  retry: false,
})