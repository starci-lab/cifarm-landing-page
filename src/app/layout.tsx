import type { Metadata } from "next"
import "./globals.css"
import { dinosaur, miSans } from "./fonts"



export const metadata: Metadata = {
    title: "Cifarm Landing Page",
    description: "Cifarm Landing Page",
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${dinosaur.variable} ${miSans.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
