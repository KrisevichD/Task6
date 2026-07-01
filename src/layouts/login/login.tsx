import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { useState, type SyntheticEvent } from "react";

const Login = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { mutate: auth, isPending, error } = useLogin();

    const loginHandler = (e: SyntheticEvent): void => {
        e.preventDefault();
        auth({login, password})
    }

    if (error) return (
        <div>
            {error.message}
        </div>
    )

    return (
        <div>
            <form action="">
                <Input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="username"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                />
                <Button 
                    type="submit"
                    onClick={(e) => loginHandler(e)}
                    disabled={isPending}
                >
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default Login;
