// ProjectCard.jsx
import Image, { StaticImageData } from "next/image";
interface ProjectCardProps {
    image: StaticImageData | string;
    name: string;
    description: string;
    link: string;
}
const ProjectCard = ({ image, name, description, link }: ProjectCardProps) => {
    return (
        <div className="bg-(--second-background-color) rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:scale-105">
            <Image src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-white text-2xl font-semibold mb-3">{name}</h3>
                <p className="text-gray-300 mb-4">{description || "No description available"}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-medium"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
