import Image from "next/image"
import { FC } from "react"
export const Logo: FC = () => {
    return (
        <div className="w-full">
            <Image
                src="/logos/web.png"
                width={1920}
                height={1080}
                alt="Hero Logo"
                className="object-cover w-full h-full"
            />
        </div>
    )
}