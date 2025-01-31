import Image from "next/image"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

export const enum TitleVariant {
    Purple = "Purple",
    Orange = "Orange",
    Blue = "Blue",
}

export const RibbonImageVariants = {
    [TitleVariant.Purple]: {
        src: "purple.png",
        text: "text-stroke-purple",
    },
    [TitleVariant.Orange]: {
        src: "orange.png",
        text: "text-stroke-orange",
    },
    [TitleVariant.Blue]: {
        src: "blue.png",
        text: "text-stroke-blue",
    },
}

interface TitleProps {
    variant?: TitleVariant;
    text?: string;
    size?: "sm" | "md" | "lg";
}

const sizeClasses = {
    sm: "w-[250px] md:w-[350px] h-[60px] md:h-[80px] text-lg md:text-xl",
    md: "w-[300px] md:w-[400px] h-[80px] md:h-[100px] text-xl md:text-2xl",
    lg: "w-[350px] md:w-[450px] h-[100px] md:h-[130px] text-2xl md:text-3xl lg:text-4xl",
}

export const Title: FC<TitleProps> = ({
    variant = TitleVariant.Purple,
    text = "Title",
    size = "lg",
}) => {
    return (
        <div className="relative flex justify-center items-center w-full">
            {/* Ribbon Image */}
            <div className={twMerge(
                "relative flex justify-center items-center aspect-[16/5] max-w-full transition-transform duration-300 hover:scale-105",
                RibbonImageVariants[variant].text,
                sizeClasses[size]
            )}>
                <Image
                    src={`/ribbons/${RibbonImageVariants[variant].src}`}
                    width={500}
                    height={150}
                    alt="Ribbon Image"
                    className="object-contain w-full h-full"
                />
                {/* Text ở giữa */}
                <span
                    className="absolute top-13 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    font-dinosaur text-white font-bold whitespace-nowrap text-stroke-[2px]"
                >
                    {text}
                </span>
            </div>
        </div>
    )
}
