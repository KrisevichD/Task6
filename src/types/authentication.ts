
import type { Url } from "url";

export interface LoginCredentials {
    login: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    gender: string;
    image: Url;
}

export interface Session {
    accessToken: string;
    refreshToken: string;
}

export interface AuthResponse extends User, Session {}

export interface ApiError {
    message: string;
    statusCode?: number;
}