import { Title, TitleVariant } from "@/components"
import { FC } from "react"
import { RoadmapList } from "./List"

export const Roadmap: FC = () => {
    return (
        <section id="roadmap" className="bg-yellow relative w-full flex flex-col items-center justify-center pt-32">
            <Title variant={TitleVariant.Orange} text="Roadmap" />

            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex-col space-y-3 hidden md:flex">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="w-1 h-20 bg-brown rounded-full"></div>
                    ))}
                </div>
                <RoadmapList />
            </div>
        </section>
    )
}
