import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useSignOut";
import { Icon } from "@iconify/react";
import { Link, useRouteContext } from "@tanstack/react-router";


const ProfileButton = () => {
    const context = useRouteContext({ from: '__root__' });
    const { signOut } = useAuth();
    console.log(context)
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
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem variant="destructive" onClick={() => signOut()}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu >
                    :
                    <Link to={'/login'} className={buttonVariants({ variant: 'icon', size: 'icon-lg' })}>
                        <Icon icon={'clarity:avatar-line'} />
                        <span className="sr-only">Login page</span>
                    </Link>
            }
        </>
    );
}

export default ProfileButton;
