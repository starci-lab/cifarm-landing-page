import { FC, Fragment } from "react"
import { About } from "./About"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Gameplay } from "./Gameplay"
import { Roadmap } from "./Roadmap"

const Page: FC = () => {
    return (
        <Fragment>
            <header className="w-full">
                <Navbar />
            </header>
            <main className="w-full">
                <Hero />
                <About />
                <Gameplay />
                <Roadmap />
            </main>
            <footer className="bg-yellow">
                Footer
            </footer>
        </Fragment>
    )
}

export default Page
