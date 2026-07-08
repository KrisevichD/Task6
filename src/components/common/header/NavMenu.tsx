import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";


const NavMenu = () => {
    return (
        <>
            <div className="block sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} size={'icon-lg'}>
                            <Icon icon={'fontisto:nav-icon-a'} />
                            <span className="sr-only">Navigation menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                        <DropdownMenuGroup asChild>
                            <nav>
                                <DropdownMenuItem asChild>
                                    <Link to="/">Home</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/dashboard">Tables</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/tables">Process</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/documentation">Documentation</Link>
                                </DropdownMenuItem>
                            </nav>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <nav className="hidden sm:flex w-full gap-10.5 text-sm font-medium justify-center items-center">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Tables</Link>
                <Link to="/tables">Process</Link>
                <Link to="/documentation">Documentation</Link>
            </nav>
        </>
    );
}

export default NavMenu;
