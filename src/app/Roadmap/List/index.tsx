import { ROADMAP_DATA } from "@/constants"
import { RoadmapItem } from "../Item"

export const RoadmapList: React.FC = () => {
    return (
        <div className="relative flex flex-col gap-16 lg:gap-24">
            {ROADMAP_DATA.map((phase, index) => (
                <div key={index} className="relative flex flex-col items-stretch">
                    <RoadmapItem {...phase} reverse={index % 2 === 1} />
                </div>
            ))}
        </div>
    )
}
