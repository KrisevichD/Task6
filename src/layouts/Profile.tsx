import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useAuth from "@/hooks/useSignOut";
import { useRouteContext } from "@tanstack/react-router";


const Profile = () => {
    const context = useRouteContext({ from: '__root__' });
    const userData = context.userData;
    const { signOut } = useAuth();

    if (!userData) return <>no info</>

    console.log(userData)

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-lg">
                <img src={userData.image} alt="" />
                <Separator />
                <CardHeader>
                    <CardTitle>
                        {userData.firstName + " " + userData.lastName}
                    </CardTitle>
                    <CardDescription>
                        {userData.email}
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                    {userData.gender}
                </CardContent>
                <Separator />
                <CardFooter>
                    <Button
                        variant={'destructive'}
                        className="w-full"
                        onClick={() => signOut()}
                    >
                        Log out
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Profile;
