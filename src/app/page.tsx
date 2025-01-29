import { FC, Fragment } from "react"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Title, TitleVariant } from "@/components/Title"

const Page: FC = () => {
    return (
        <Fragment>
            <header className="w-full">
                <Navbar />
            </header>
            <main className="w-full">
                <Hero />

                <Title variant={TitleVariant.Yellow} text="Main Content" />

    
            </main>
            <footer className="bg-yellow">
                Footer
            </footer>
        </Fragment>
    )
}

export default Page
