import localFont from "next/font/local"

export const dinosaur = localFont({
    src: "./fonts/Dinosaur.ttf",
    variable: "--font-dinosaur",
    weight: "100 900",
})
  
export const miSans = localFont({
    src: [
        {
            path: "./fonts/MiSans-Latin-Demibold.woff2",
            weight: "400",
            style: "demibold",
        },
        {
            path: "./fonts/MiSans-Latin-Bold.woff2",
            weight: "600",
            style: "bold",
        },
    ],
})