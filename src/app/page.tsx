import { FC, Fragment } from "react"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"

const Page: FC = () => {
    return (
        <Fragment>
            <header className="w-full">
                <Navbar />
            </header>
            <main className="w-full">
                <Hero />
               
    
            </main>
            <footer>
                Footer
            </footer>
        </Fragment>
    )
}

export default Page
