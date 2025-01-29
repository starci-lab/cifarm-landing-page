import Image from "next/image"
import { FC } from "react"

export const enum TitleVariant {
    Purple = "Purple",
    Yellow = "Yellow",
    Orange = "Orange",
}

const RibbonImageVariants = {
    [TitleVariant.Purple]: "purple.png",
    [TitleVariant.Yellow]: "yellow.png",
    [TitleVariant.Orange]: "orange.png",
}

interface TitleProps {
    variant?: TitleVariant
    text?: string
}

export const Title: FC<TitleProps> = ({
    variant = TitleVariant.Purple,
    text = "Title",
}) => {

    return (
        <div className="flex items-center justify-center">
            <h1 className="text-4xl">{text}</h1>

            <div>
                <Image
                    src={`/ribbons/${RibbonImageVariants[variant]}`}
                    width={100}
                    height={100}
                    alt="Ribbon Image"
                />
            </div>
        </div>
    )
}