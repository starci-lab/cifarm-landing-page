import { Title, TitleVariant } from "@/components"
import { FC } from "react"
import { Board } from "./Board"
export const About: FC = () => {

    return (
        <section id="about" className="bg-yellow relative w-full flex flex-col items-center justify-center pt-32">
            <Title variant={TitleVariant.Blue} text="About" />

            <div className="flex gap-2 items-center justify-center">
                <Board />
            </div>
        </section>
    )
}