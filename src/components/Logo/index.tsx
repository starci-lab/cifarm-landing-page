import Image from "next/image"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface LogoProps {
    className?: string
}

export const Logo: FC<LogoProps> = ({ className = "" }) => {
    return (
        <div className={twMerge("relativeflex items-center justify-center", className)}>
            <Image
                src="/logos/web.png"
                width={1920}
                height={1080}
                alt="Hero Logo"
                className="object-contain w-full h-full"
                priority
            />
        </div>
    )
}
