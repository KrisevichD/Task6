import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { authQueryOptions, refreshSessionQueryOptions } from "@/app/api/api";

interface HeaderProps {
    queryClient: QueryClient
}

const Header = ({ queryClient }: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const hasToken = !!queryClient.getQueryData(['token'])
    const { data: user, isFetching } = useQuery(authQueryOptions);
    const uu = queryClient.ensureQueryData(refreshSessionQueryOptions);

    console.log(hasToken, uu)

    const isLightTheme = theme === 'light';
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
                    {hasToken && !isFetching
                        ? <img src={user?.image} alt="" />
                        : <Icon icon={'clarity:avatar-line'} />
                    }
                </Button>
            </div>
        </div>
    );
}

export default Header;
