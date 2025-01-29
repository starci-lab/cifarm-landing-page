import { Background, Logo, PlayButton } from "@/components"
import { FC } from "react"
export const Hero: FC = () => {

    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="w-[200px] md:w-[300px] lg:w-[400px]">
                    <Logo />
                </div>
                <PlayButton />
            </div>
            <Background />
        </section>
    )
}