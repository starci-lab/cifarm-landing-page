"use client"

import Image from "next/image"
import { FC } from "react"

export const Board: FC = () => {
    return (
        <div className="flex justify-center items-center px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1200px] w-full">
                
                <div className="relative w-full aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/rxJJQiXiBzk?si=iA9n9V2MlVq1EYaQ"
                        title="YouTube Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="relative w-full flex justify-center">
                    {/* Board Image */}
                    <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px]">
                        <Image
                            src="/woods/board.png"
                            width={900}
                            height={506}
                            alt="Board Image"
                            className="object-contain w-full h-full translate-y-6"
                        />
                        
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 px-6 py-4 w-[80%]">
                            <span className="font-misans text-black font-bold text-yellow-600 text-[16px] sm:text-xl md:text-2xl">Cifarm: Farm-to-earn on Telegram! <br /></span>
                            <p className="font-misans text-black font-bold text-[14px] sm:text-lg md:text-xl leading-relaxed">
                                - Step into the first <span className="text-green-600">multichain farming game</span> on Telegram,
                                powered by <span className="text-blue-600">Ciwallet</span> and <span className="text-purple-600">Wormhole</span>.
                                <br /> - Farm, help, visit, and even steal from other players while earning airdropped tokens!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
