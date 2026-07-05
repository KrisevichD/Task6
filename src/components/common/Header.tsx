import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="h-16 w-screen bg-white px-3 py-6 flex">
            <nav className="w-full flex gap-10.5 text-sm font-medium justify-center items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/dashboard'}>Tables</Link>
                <Link to={'/tables'}>Process</Link>
                <Link to={'/'}>Documentation</Link>
            </nav>
            <div className="flex gap-3 items-center">
                <Button variant={'theme'} size={'icon-md'}>M</Button>
                <Button variant={'ghost'}>T</Button>
                <Button size={'icon-lg'}>P</Button>
            </div>
        </div>
    );
}

export default Header;
