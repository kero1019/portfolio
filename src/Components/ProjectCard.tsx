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
        <article className="overflow-hidden rounded-xl bg-(--second-background-color) shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <Image src={image} alt={name} className="h-44 w-full object-cover sm:h-48" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            <div className="p-5 sm:p-6">
                <h3 className="mb-3 text-xl font-semibold text-(--white-color) sm:text-2xl">{name}</h3>
                <p className="text-(--text-color) mb-4">{description || "No description available"}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-medium"
                >
                    View project <span aria-hidden="true">→</span>
                </a>
            </div>
        </article>
    );
};

export default ProjectCard;
