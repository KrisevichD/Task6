import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

interface UseAuth {
    signOut: () => void;
}

export default function useAuth(): UseAuth {
    const queryClient = useQueryClient();
    const router = useRouter();

    const signOut = () => {
        localStorage.removeItem('refreshToken');
        queryClient.removeQueries({ queryKey: ['auth'] });
        router.invalidate();
    }

    return {
        signOut
    }
}