import { FC } from "react"
import { Background } from "./Background"
import { Logo } from "./Logo"
import { PlayButton } from "./PlayButton"
export const Hero: FC = () => {

    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="w-[400px]">
                    <Logo />
                </div>
                <PlayButton />
            </div>
            <Background />
        </section>
    )
}