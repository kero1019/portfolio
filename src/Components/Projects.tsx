// Projects.jsx
import React from "react";
import ProjectCard from "@/Components/ProjectCard";
import template1Img from "@/assets/Images/template.png";
import museumImg from "@/assets/Images/mus.png";
import weatherImg from "@/assets/Images/weather.png";
import ageCalcImg from "@/assets/Images/age.png";
import tenziesImg from "@/assets/Images/tenzies.png";
import airbnbImg from "@/assets/Images/arbian.png";
import votingImg from "@/assets/Images/voting.png";
import triviaImg from "@/assets/Images/travial.png";
import vanlifeImg from "@/assets/Images/vanlife.png";


const projects = [
    { id: 1, name: "Template-1", image: template1Img, link: "https://kero1019.github.io/Template-1/", description: "A starter template project" },
    { id: 10, name: "VanLife", image: vanlifeImg, link: "https://kero1019.github.io/VanLife/", description: "VanLife rental project" },
    { id: 7, name: "Voting System", image: votingImg, link: "https://votingproject2023.github.io/An-Enhanced-Web-Based-Electronic-Voting-System/", description: "Web-based electronic voting system" },
    { id: 4, name: "Code Alpha AGE CALCULATOR", image: ageCalcImg, link: "https://kero1019.github.io/Code_Alpha_AGE_CALCULATOR/", description: "Calculate age easily" },
    { id: 3, name: "Weather Temperature", image: weatherImg, link: "https://kero1019.github.io/Weather-Temperature/", description: "Weather forecast app" },
    { id: 8, name: "Trivia", image: triviaImg, link: "https://kero1019.github.io/Trivia/", description: "Trivia quiz game" },
    { id: 6, name: "AirBnb Template", image: airbnbImg, link: "https://kero1019.github.io/AirBnb-Template/", description: "Airbnb clone template" },
    { id: 5, name: "Tenzies Game", image: tenziesImg, link: "https://kero1019.github.io/Tenzies-Game/", description: "Fun dice game project" },
    { id: 2, name: "Museum Tour", image: museumImg, link: "https://kero1019.github.io/museum-tour/", description: "Interactive museum tour website" },
];

const Projects = () => {
    return (<div className="my-50">
        <h1 className="text-5xl font-bold text-(--white-color) my-10 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    image={project.image}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    </div>
    );
};

export default Projects;
