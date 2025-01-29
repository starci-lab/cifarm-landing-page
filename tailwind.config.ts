/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss"
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brown: "#553320",
                yellow: "#EFE0A2",
            },
            fontFamily: {
                misans: ["var(--font-mi-sans)"],
                dinosaur: ["var(--font-dinosaur)"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/postcss"),
        require("@designbycode/tailwindcss-text-stroke"),
    ],
}
export default config
