interface IRoadMap {
    phase: string;
    description: string;
    image: string;
    icon: string;
    features: Array<string>;
}

export const ROADMAP_DATA: Array<IRoadMap> = [
    {
        phase: "Phase 1 - 22/9",
        description: "Release the Cifarm MVP on Aptos Testnet",
        image: "/roadmap/images/phase_1.png",
        icon: "/roadmap/icons/coin.png",
        features: [
            "Planting and harvesting crops",
            "Feeding and raising animals",
            "Purchasing and selling animals, and crops",
        ]
    },
    {
        phase: "Phase 2 - Late Nov 2024",
        description: "Add More Features",
        image: "/roadmap/images/phase_2.png",
        icon: "/roadmap/icons/friends.png",
        features: [
            "New animals (10+)",
            "New pets (10+)",
            "New crops (20+)"
        ]
    },
    {
        phase: "Phase 3 - Late Dec 2024",
        description: "Raising the Cifarm community",
        image: "/roadmap/images/phase_3.png",
        icon: "/roadmap/icons/present.png",
        features: [
            "Launch the Cifarm community on Telegram",
            "Launch in-game events where players can claim $CAU tokens through airdrops"
        ]
    },
    {
        phase: "Phase 4 - Early Jan 2025",
        description: "Presale tokens, create NFT marketplace",
        image: "/roadmap/images/phase_4.png",
        icon: "/roadmap/icons/coin_carrot.png",
        features: [
            "Presale tokens",
            "Create NFT marketplace",
        ]
    },
    {
        phase: "Phase 5 - Feb 2025",
        description: "Release the stable version",
        image: "/logos/web.png",
        icon: "/roadmap/icons/coin_bapcai.png",
        features: [
            "Release the stable version of Cifarm on AptosC-Chain Mainnet",
        ]
    }
]
