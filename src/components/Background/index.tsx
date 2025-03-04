import Image from "next/image"
import { FC } from "react"

export const Background: FC = () => {
    return (
        <section className="absolute inset-0 -z-10">
            {/* Desktop */}
            <Image
                src="/backgrounds/desktop.png"
                width={1920}
                height={1080}
                alt="Hero background"
                className="hidden lg:block object-cover w-full h-full"
            />
            {/* Mobile */}
            <Image
                src="/backgrounds/mobile.png"
                width={375}
                height={812}
                alt="Hero background"
                className="lg:hidden object-cover w-full h-full"
            />

            {/* Overlay với gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-[#E1F4FD] from-[0%] to-[15%] to-transparent"
            />
            <div
                className="absolute inset-0 bg-gradient-to-b from-yellow/30 from-[0%] to-[10%] to-transparent"
            />
        </section>
    )
}
