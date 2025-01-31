"use client"

import { navItems } from "@/constants"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { FC, useState } from "react"
import { Logo } from "@/components"


export const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="font-dinosaur fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90%] max-w-[1200px] bg-brown px-6 lg:px-8 py-2 pb-6 shadow-md z-50 bg-[url('/woods/header.png')] bg-contain bg-center bg-repeat rounded-md">
            {/* Logo */}
            <Logo className="w-[80px] lg:w-[80px]" />

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6 text-white font-bold text-lg ml-6">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            className="relative px-3 py-2 transition duration-300 hover:text-yellow after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow after:transition-all after:duration-300 hover:after:w-full text-stroke-1 text-stroke-brown"
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Play Now Button */}
            <button className="hidden lg:block whitespace-nowrap bg-yellow text-brown px-6 py-2 rounded-lg font-semibold text-lg transition hover:scale-105 hover:shadow-lg">
                Play Now
            </button>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-brown rounded-b-md shadow-md lg:hidden"
                    >
                        <ul className="flex flex-col items-center gap-4 p-4 text-white font-bold text-lg">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block px-3 py-2 transition duration-300 hover:text-yellow"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                            <button className="bg-yellow text-brown px-6 py-2 rounded-lg font-semibold text-lg transition hover:scale-105 hover:shadow-lg">
                                Play Now
                            </button>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
