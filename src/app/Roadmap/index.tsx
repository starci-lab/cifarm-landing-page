import { Title, TitleVariant } from "@/components"
import { FC } from "react"
import { Board } from "../About/Board"
export const Roadmap: FC = () => {

    return (
        <section id="roadmap" className="bg-yellow relative w-full flex flex-col items-center justify-center pt-32">
            <Title variant={TitleVariant.Orange} text="Roadmap" />

            <div className="flex gap-2 items-center justify-center">
                <Board />
            </div>
        </section>
    )
}