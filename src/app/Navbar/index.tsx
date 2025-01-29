import { FC } from "react"
export const Navbar: FC = () => {

    return (
        <nav className="fixed flex justify-center bg-brown p-4">
            <ul className="flex gap-4">
                <li>
                    <a href="#" className="">Home</a>
                </li>
                <li>
                    <a href="#" className="">About</a>
                </li>
                <li>
                    <a href="#" className="">Contact</a>
                </li>
            </ul>
        </nav>
    )
}