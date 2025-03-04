import { Title, TitleVariant } from "@/components"
import { FC } from "react"
import { Board } from "../About/Board"
export const Gameplay: FC = () => {

    return (
        <section id="gameplay" className="relative w-full flex flex-col items-center justify-center pt-32">
            <Title variant={TitleVariant.Purple} text="Gameplay" />

            <div className="flex gap-2 items-center justify-center">
                <Board />
            </div>
        </section>
    )
}