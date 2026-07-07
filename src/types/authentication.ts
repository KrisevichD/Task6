
export interface LoginCredentials {
    login: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    role: string;
}

export interface SessionInfo {
    accessToken: string;
    refreshToken: string;
}

export interface AuthResponse extends User, SessionInfo { }

export interface ApiError {
    message: string;
    status?: number;
    code?: string;
}