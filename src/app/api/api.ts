import type { AuthResponse, LoginCredentials, SessionInfo, User } from "@/types/authentication";
import type { IDashboardResponce } from "@/types/dashboard";
import type { ITableDataResponse } from "@/types/tables";
import axios from "axios";

async function getMe(token: string): Promise<User> {
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

async function refresh(): Promise<string | null> {
    const token = localStorage.getItem('refreshToken');

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

async function signIn(credentials: LoginCredentials): Promise<AuthResponse> {
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

async function getTableData(): Promise<ITableDataResponse> {
    // const response = await axios.get<ITableDataResponse>(
    //     'https://dummyjson.com/c/566c-590a-4593-87ed'
    // )
    // return response.data;
    const jsonUrl = `${import.meta.env.BASE_URL}/table.json`;

    const response = await axios.get<ITableDataResponse>(jsonUrl);
    console.log(response)
    return response.data;
}

async function getDashboardData(): Promise<IDashboardResponce> {
    const response = await axios.get<IDashboardResponce>(
        'https://dummyjson.com/c/f5ea-9bc2-4af2-bf13'
    )
    return response.data;
}

const api = {
    signIn,
    refresh,
    getMe,
    getTableData,
    getDashboardData
}

export default api;

