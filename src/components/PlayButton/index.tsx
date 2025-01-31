"use client"

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { motion } from "motion/react"
import { GAME_URL } from "@/constants"

export const PlayButton: FC = () => {
    return (
        <Link href={GAME_URL} passHref>
            <motion.div
                className="relative cursor-pointer w-[200px] md:w-[300px] lg:w-[400px] h-[120px]"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 8 }}
            >
                {/* Wrapper để giữ kích thước */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Hình ảnh */}
                    <Image
                        src="/backgrounds/info.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Play Button"
                    />
                    <motion.span
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 
                            font-dinosaur text-xl md:text-3xl lg:text-4xl text-white font-bold whitespace-nowrap 
                            text-stroke-brown text-stroke-[2px]"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        Play Now
                    </motion.span>
                </div>
            </motion.div>
        </Link>
    )
}
