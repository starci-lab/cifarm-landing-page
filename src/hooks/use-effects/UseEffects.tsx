import { FC } from "react"
import { useFullPageScroll } from "./useFullPageScroll"
import { sectionIds } from "@/constants"

export const UseEffects: FC  = () => {
    useFullPageScroll(sectionIds)
    return (<></>)
}