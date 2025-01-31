import Image from "next/image"

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
        <div className={`font-misans flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center md:items-end gap-24`}>
            <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="relative flex items-center gap-4 mb-4">
                    <Image src={icon} width={50} height={50} alt="icon" />
                    <h2 className="text-2xl font-bold font-dinosaur">{phase}</h2>
                </div>
                <p className="text-lg text-gray-700">{description}</p>
                <Image src={image} width={300} height={150} alt="roadmap phase" className="mt-6 w-full md:w-3/5 lg:w-1/2" />
            </div>
  
            <div className="flex-1 self-start md:self-auto">
                <ul className="list-none space-y-2 text-lg">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500">•</span> {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}