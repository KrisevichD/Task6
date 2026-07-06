import { useAuth } from "@/hooks/useAuth";
import { createContext, useEffect, type ReactNode } from "react";

interface AuthProps {
    children: ReactNode
}

export const AuthContext = createContext<boolean | undefined>(undefined!);

const AuthProvider = ({ children }: AuthProps) => {
    const refreshToken = localStorage.getItem('refreshToken')
    const { refreshSession, signIn } = useAuth();
    const { data, mutate, isSuccess } = refreshSession(refreshToken);

    useEffect(() => {
        mutate();
    }, [])

    return (
        <AuthContext value={isSuccess}>
            {children}
        </AuthContext>
    );
}

export default AuthProvider;
