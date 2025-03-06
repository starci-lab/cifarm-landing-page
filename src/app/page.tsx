"use client"

import { FC } from "react"
import { About } from "./About"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Gameplay } from "./Gameplay"
import { Roadmap } from "./Roadmap"
import { ScrollProgressBar } from "@/components"
import Image from "next/image"

const Page: FC = () => {
    return (
        <>
            <ScrollProgressBar />
            <header className="w-full fixed top-0 z-50">
                <Navbar />
            </header>
            <main className="w-full">
                <Hero />
                <div className="relative">
                    <About />
                    <Gameplay />
                    <section className="absolute inset-0 -z-10">
                        <Image
                            src="/backgrounds/hero.jpg"
                            width={1920}
                            height={1080}
                            alt="Hero background"
                            className="hidden lg:block object-cover w-full h-full object-bottom z-40-"
                        />
                        {/* Mobile */}
                        <Image
                            src="/backgrounds/about_mobie.jpg"
                            width={1080}
                            height={1920}
                            alt="Hero background"
                            className="lg:hidden object-cover w-full h-full"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-[#E1F4FD] from-[0%] to-[10%] to-transparent"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-yellow from-[0%] to-[10%] to-transparent"
                        />
                    </section>
                </div>
                <Roadmap />
            </main>
            {/* <footer className="bg-yellow h-screen flex items-center justify-center">
                Footer
            </footer> */}
        </>
    )
}

export default Page
