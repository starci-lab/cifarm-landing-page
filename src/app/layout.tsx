import type { Metadata } from "next"
import { dinosaur, miSans } from "./fonts"
import "./globals.css"
import { WrappedLayout } from "./WrappedLayout"

export const metadata: Metadata = {
    title: "Cifarm - Farm-to-earn on Telegram!",
    description: "Join Cifarm, farm, help, visit, and even steal from other players while earning airdropped tokens!",
    
    robots: "index, follow",

    openGraph: {
        title: "Cifarm - Farm-to-earn on Telegram!",
        description: "Join Cifarm, farm, help, visit, and even steal from other players while earning airdropped tokens!",
        url: "https://landing-page.cifarm.starci.io",
        siteName: "Cifarm",
        images: [
            {
                url: "/backgrounds/desktop.png",
                width: 1200,
                height: 630,
                alt: "Cifarm Landing Page",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Cifarm - Farm-to-earn on Telegram!",
        description: "Join Cifarm, Farm, help, visit, and even steal from other players while earning airdropped tokens",
        images: ["/backgrounds/desktop.png"],
        creator: "@CifarmOfficial",
    },

    icons: {
        icon: "/favicon.ico",
        apple: "/backgrounds/desktop.png",
    },
    themeColor: "#553320",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${miSans.variable} ${dinosaur.variable} antialiased`}>
                <WrappedLayout>{children}</WrappedLayout>
            </body>
        </html>
    )
}
