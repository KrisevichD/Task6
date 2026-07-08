import { Icon } from "@iconify/react";
import { Button } from "../../ui/button";
import NavMenu from "./NavMenu";
import ProfileButton from "./ProfileButton";
import ThemeButton from "./ThemeButton";

const Header = () => {

    return (
        <header className="h-16 w-full bg-card px-3 py-6 flex justify-between items-center">
            <NavMenu />
            <div className="flex gap-3 items-center">
                <ThemeButton />
                <Button variant={'ghost'} size={'icon-md'} onClick={() => alert('no notifications yet!')}>
                    <Icon icon={'streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm'} />
                    <span className="sr-only">notifications</span>
                </Button>
                <ProfileButton />
            </div>
        </header>
    );
}

export default Header;
