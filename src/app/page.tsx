"use client"

import { FC } from "react"
import { About } from "./About"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Gameplay } from "./Gameplay"
import { Roadmap } from "./Roadmap"
import { ScrollProgressBar } from "@/components"

const Page: FC = () => {
    return (
        <>
            <ScrollProgressBar />
            <header className="w-full fixed top-0 z-50">
                <Navbar />
            </header>
            <main className="w-full">
                <Hero />
                <About />
                <Gameplay />
                <Roadmap />
            </main>
            <footer className="bg-yellow h-screen flex items-center justify-center">
                Footer
            </footer>
        </>
    )
}

export default Page
