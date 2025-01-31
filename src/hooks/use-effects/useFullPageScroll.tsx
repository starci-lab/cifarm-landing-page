import { useEffect, useState } from "react"

export const useFullPageScroll = (sectionIds: Array<string>) => {
    const [currentSection, setCurrentSection] = useState(0)

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (event.deltaY > 50) {
                setCurrentSection((prev) => Math.min(prev + 1, sectionIds.length - 1))
            } else if (event.deltaY < -50) {
                setCurrentSection((prev) => Math.max(prev - 1, 0))
            }
        }

        window.addEventListener("wheel", handleScroll)

        return () => {
            window.removeEventListener("wheel", handleScroll)
        }
    }, [sectionIds])

    useEffect(() => {
        const sectionElement = document.getElementById(sectionIds[currentSection])
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" })
        }
    }, [currentSection, sectionIds])

    return { currentSection, setCurrentSection }
}