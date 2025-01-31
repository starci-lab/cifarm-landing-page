"use client"

import { UseEffects } from "@/hooks"
import { PropsWithChildren, Suspense } from "react"

export const LayoutContent = ({ children }: PropsWithChildren) => {
    return (
        <Suspense>
            {children}
            <UseEffects/>
        </Suspense>
    )
}

export const WrappedLayout = ({ children }: PropsWithChildren) => {
    return (
        <LayoutContent> {children} </LayoutContent>
    )
}