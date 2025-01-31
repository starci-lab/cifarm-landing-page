"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface RoadmapItemProps {
    phase: string;
    description: string;
    image: string;
    icon: string;
    features: string[];
    reverse?: boolean;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({ 
    phase = "Phase 1", 
    description = "Default description", 
    image = "/default-image.png", 
    icon = "/default-icon.png", 
    features = ["Default feature 1", "Default feature 2"], 
    reverse = false 
}) => {
    return (
        <motion.div 
            className={`font-misans flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center md:items-end gap-24`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Icon + Tiêu đề */}
            <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="relative flex items-center gap-4 mb-4">
                    <motion.div
                        initial={{ rotate: -15, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <Image src={icon} width={50} height={50} alt="icon" />
                    </motion.div>
                    <h2 className="text-2xl font-bold font-dinosaur">{phase}</h2>
                </div>
                <p className="text-lg text-gray-700">{description}</p>

                {/* Hình ảnh chính */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    <Image src={image} width={300} height={150} alt="roadmap phase" className="mt-6 w-full md:w-3/5 lg:w-1/2" />
                </motion.div>
            </div>

            {/* Danh sách tính năng */}
            <div className="flex-1 self-start md:self-auto">
                <ul className="list-none space-y-2 text-lg">
                    {features.map((feature, i) => (
                        <motion.li 
                            key={i} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                        >
                            <span className="text-blue-500">•</span> {feature}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}
