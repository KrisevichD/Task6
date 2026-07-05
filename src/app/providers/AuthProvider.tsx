import type { FC, ReactNode } from "react";

interface AuthProps {
    children: ReactNode
}

const AuthProvider: FC<AuthProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}

export default AuthProvider;
