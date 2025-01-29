import localFont from "next/font/local"

export const dinosaur = localFont({
    src: "./Dinosaur.ttf",
    variable: "--font-dinosaur",
    weight: "100 900",
})
  
export const miSans = localFont({
    src: [
        {
            path: "./MiSans-Latin-Demibold.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./MiSans-Latin-Bold.woff2",
            weight: "600",
            style: "bold",
        },
    ],
    variable: "--font-mi-sans",
})