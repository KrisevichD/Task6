import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useSignOut";
import { Icon } from "@iconify/react";
import { Link, useRouteContext } from "@tanstack/react-router";


const ProfileButton = () => {
    const context = useRouteContext({ from: '__root__' });
    const { signOut } = useAuth();

    return (
        <>
            {
                context.isAuthenticated
                    ?
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={'icon'} size={'icon-lg'}>
                                <img src={context.userData?.image} alt="" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Link to={'/profile'}>Profile</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem variant="destructive" onClick={() => signOut()}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu >
                    :
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={'icon'} size={'icon-lg'}>
                                <Icon icon={'clarity:avatar-line'} />
                                <span className="sr-only">Login page</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Link to={'/login'}>
                                        Log in
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu >

            }
        </>
    );
}

export default ProfileButton;
