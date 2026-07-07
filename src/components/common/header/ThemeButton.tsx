import { useTheme } from "@/app/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();

    const isLightTheme = theme === 'light';
    const themeHandler = () => setTheme(isLightTheme ? 'dark' : 'light');

    return (
        <Button variant={'theme'} size={'icon-md'} onClick={themeHandler}>
            {
                isLightTheme
                    ? <Icon icon={'entypo:light-up'} color="currentColor" />
                    : <Icon icon={'tabler:moon'} color="currentColor" />
            }
            <span className="sr-only">Change theme</span>
        </Button>
    );
}

export default ThemeButton;
