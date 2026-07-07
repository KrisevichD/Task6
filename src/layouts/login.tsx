
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useSignIn from "@/hooks/useSignIn";
import { useState, type SyntheticEvent } from "react";

const Login = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { signIn, error, isPending } = useSignIn();

    const loginHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (!login || !password) return
        signIn({ login, password });
    }

    return (
        <div>
            <Title
                title="Authentication"
            />
            <form>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="username">User Name</FieldLabel>
                        <Input
                            id="username"
                            placeholder="enter your username"
                            aria-invalid={!!error}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                            id="password"
                            placeholder="enter your password"
                            aria-invalid={!!error}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={true}
                        />
                    </Field>
                    <Button
                        type="submit"
                        onClick={(e) => loginHandler(e)}
                        disabled={isPending}
                    >
                        Log in{isPending && <>...</>}
                    </Button>
                </FieldGroup>
            </form>
        </div>
    );
}

export default Login;
