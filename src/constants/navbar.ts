interface INavItem {
    text: string
    href: string
}

export const navItems: Array<INavItem> = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Gameplay", href: "#gameplay" },
    { text: "Roadmap", href: "#roadmap" },
]

export const sectionIds = navItems.map((item) => item.href.slice(1))
