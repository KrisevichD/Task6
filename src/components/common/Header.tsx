import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { authQueryOptions } from "@/app/api/api";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const { data: user } = useQuery(authQueryOptions);

    const isLightTheme = theme === 'light';

    console.log(theme)

    const themeHandler = () => setTheme(isLightTheme ? 'dark' : 'light');

    return (
        <div className="h-16 w-screen bg-card px-3 py-6 flex">
            <nav className="w-full flex gap-10.5 text-sm font-medium justify-center items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/dashboard'}>Tables</Link>
                <Link to={'/tables'}>Process</Link>
                <Link to={'/'}>Documentation</Link>
            </nav>
            <div className="flex gap-3 items-center">
                <Button variant={'theme'} size={'icon-md'} onClick={themeHandler}>
                    {
                        isLightTheme 
                            ? <Icon icon={'entypo:light-up'} color="currentColor"/>
                            : <Icon icon={'tabler:moon'} color="currentColor"/>
                    }
                </Button>
                <Button variant={'ghost'} size={'icon-md'}>
                    <Icon icon={'streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm'}/>
                </Button>
                <Button size={'icon-lg'}>
                    {user 
                        ? <img src={user.image} alt="" />
                        : <Icon icon={'clarity:avatar-line'} />
                    }
                </Button>
            </div>
        </div>
    );
}

export default Header;
