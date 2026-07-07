
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useSignIn from "@/hooks/useSignIn";
import { useState, type SyntheticEvent } from "react";

const Login = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const { signIn, isPending, isError } = useSignIn();

    const loginHandler = async (e: SyntheticEvent) => {
        setMessage('')
        e.preventDefault();
        if (!login || !password) {
            setMessage("Please enter all fields!");
            return;
        }
        signIn({ login, password });
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                    <CardDescription>
                        Enter your account data
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username">User Name</FieldLabel>
                                <Input
                                    id="username"
                                    placeholder="enter your username"
                                    aria-invalid={!!message && !login}
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="enter your password"
                                    aria-invalid={!!message && !password}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required={true}
                                />
                            </Field>
                            <div className="text-destructive">{(isError && 'Invalid credentials') || message}</div>
                            <Button
                                type="submit"
                                onClick={(e) => loginHandler(e)}
                                disabled={isPending}
                            >
                                Log in{isPending && <>...</>}
                            </Button>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;
