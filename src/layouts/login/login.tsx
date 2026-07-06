
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignIn from "@/hooks/useSignIn";
import { useState, type SyntheticEvent } from "react";

const Login = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { mutate } = useSignIn();

    const loginHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        mutate({login, password});
    }

    

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
                >
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default Login;
