import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { Button } from "../../ui/button";
import ProfileButton from "./ProfileButton";
import ThemeButton from "./ThemeButton";

const Header = () => {

    return (
        <header className="h-16 w-screen bg-card px-3 py-6 flex justify-between">
            <nav className="hidden sm:flex w-full gap-10.5 text-sm font-medium justify-center items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/dashboard'}>Tables</Link>
                <Link to={'/tables'}>Process</Link>
                <Link to={'/'}>Documentation</Link>
            </nav>
            <nav className="block sm:hidden">
                ...
            </nav>
            <div className="flex gap-3 items-center">
                <ThemeButton />
                <Button variant={'ghost'} size={'icon-md'}>
                    <Icon icon={'streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm'}/>
                </Button>
                <ProfileButton />

            </div>
        </header>
    );
}

export default Header;
