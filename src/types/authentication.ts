
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
    image: string;
}

export interface SessionInfo {
    accessToken: string;
    refreshToken: string;
}

export interface AuthResponse extends User, SessionInfo {}

export interface ApiError {
    message: string;
    statusCode?: number;
}