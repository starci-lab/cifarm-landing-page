"use client"

import { ROADMAP_DATA } from "@/constants"
import { RoadmapItem } from "../Item"
import { motion } from "motion/react"

export const RoadmapList: React.FC = () => {
    return (
        <div className="relative flex flex-col gap-16 lg:gap-24">
            {ROADMAP_DATA.map((phase, index) => (
                <motion.div 
                    key={index}
                    className="relative flex flex-col items-stretch"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <RoadmapItem {...phase} reverse={index % 2 === 1} />
                </motion.div>
            ))}
        </div>
    )
}
