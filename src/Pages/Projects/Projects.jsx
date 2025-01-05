import React from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const projects = [
    {
      image: "https://i.ibb.co.com/tq9TQk9/tastetreasury.png",
      title: "Taste Treasury",
      description: "A full-stack restaurant management website built with MERN stack for managing orders, menu, and reservations.",
      techStack: ["MERN Stack", "ReactJS", "Node.js", "MongoDB", "Express.js"],
      liveLink: "https://taste-treasury.netlify.app",
      githubLink: "https://github.com/Abubokkor98/taste-treasury-client",
    },
    {
      image: "https://i.ibb.co.com/hDCVZts/Screenshot-2025-01-05-113200.png", 
      title: "Pet Haven",
      description: "A pet adoption platform with search and filtering features for adopting pets.",
      techStack: ["ReactJS", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
      liveLink: "https://assignment-sixth.netlify.app", 
      githubLink: "https://github.com/Abubokkor98/pet-adoption-project", 
    },
    {
      image: "https://i.ibb.co.com/GJMxjwf/Screenshot-38.png",
      title: "PlayGear",
      description: "An e-commerce website for sports accessories with features like user authentication, product management, and dark/light theme toggle.",
      techStack: ["ReactJS", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Framer Motion"],
      liveLink: "https://playgear.netlify.app",
      githubLink: "https://github.com/Abubokkor98/playgear",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">My Modern Projects</h2>
      <div className="grid grid-cols-1 gap-8 w-9/12 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
