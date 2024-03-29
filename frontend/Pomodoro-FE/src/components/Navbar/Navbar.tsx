import { Divider } from "@nextui-org/react"
import { ReactTyped } from "react-typed";

interface navbarProps {
    title: string;
}

const Navbar = ({ title }: navbarProps) => {
    return (
        <>
            <div className="flex">
                <nav className="w-fit p-2 mt-2 flex flex-col justify-center mx-auto sm:text-3xl text-xl">
                    <a href="/">
                        <ReactTyped strings={[title]} typeSpeed={5} cursorChar="" />
                    </a>
                    <Divider className="my-2" />
                </nav>
            </div>
        </>
    )
}

export default Navbar