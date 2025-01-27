import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      images: [
        "https://i.ibb.co.com/3Www6vZ/workforce1.png",
        "https://i.ibb.co.com/R9LQxTD/workforce2.png",
        "https://i.ibb.co.com/9ng2TJC/workforce3.png",
      ],
      title: "Workforce Pro",
      description:
        "A comprehensive Employee Management platform designed to track workflow, salary, and contracts. It allows HR to manage employee tasks and payroll, while employees can track their work and submit updates.",
      techStack: [
        "ReactJS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Strip",
        "TailwindCSS",
        "JWT",
        "Firebase",
      ],
      liveLink: "https://workforcepro.netlify.app",
      githubLink: "https://github.com/Abubokkor98/workforcepro-client",
    },

    {
      images: [
        "https://i.ibb.co.com/XLdMTMP/t-treasury1.png",
        "https://i.ibb.co.com/9tF9t6S/t-treasury2.png",
        "https://i.ibb.co.com/MZTV6RV/t-treasury3.png",
      ],
      title: "Taste Treasury",
      description:
        "A full-stack restaurant management website built with MERN stack for managing orders, menu, and reservations.",
      techStack: ["MERN Stack", "ReactJS", "Node.js", "MongoDB", "Express.js"],
      liveLink: "https://taste-treasury.netlify.app",
      githubLink: "https://github.com/Abubokkor98/taste-treasury-client",
    },

    {
      images: [
        "https://i.ibb.co.com/Vm41zqN/pg1.png",
        "https://i.ibb.co.com/pvJYTc1/pg2.png",
        "https://i.ibb.co.com/6JP8sTG/pg3.png",
      ],
      title: "PlayGear",
      description:
        "An e-commerce website for sports accessories with features like user authentication, product management, and dark/light theme toggle.",
      techStack: [
        "ReactJS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "Framer Motion",
      ],
      liveLink: "https://playgear.netlify.app",
      githubLink: "https://github.com/Abubokkor98/playgear",
    },
  ];

  return (
    <div className="px-4 sm:px-20 py-10">
      <h2 className="text-5xl font-extrabold text-blue-600 mb-12">
        My Projects
      </h2>
      <p className="text-gray-600 text-lg mb-12">
        Explore my collection of web development projects showcasing my skills
        in building interactive, responsive, and user-friendly applications.
        Each project is designed to solve real-world problems with a focus on
        clean code and innovative solutions.
      </p>
      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
