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
      title: "Workforce Pro (Employee Management System)",
      description: 
        "WorkForce Pro is a comprehensive employee management system streamlining workload tracking, HR operations, and payroll processing with role-based access control (RBAC) for Employees, HR, and Admins.",
      techStack: [
        "ReactJS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Stripe",
        "TailwindCSS",
        "JWT",
        "Firebase",
        "TanStack Query",
      ],
      features: [
        "Employees can log tasks, track hours, and manage work records in real time.",
        "HR can verify employees, track progress, and process salary payments.",
        "Admin can approve payments, promote employees, and adjust salaries."
      ],
      liveLink: "https://workforcepro.netlify.app",
      clientLink: "https://github.com/Abubokkor98/workforcepro-client",
      serverLink: "https://github.com/Abubokkor98/workforcepro-server",
    },

    {
      images: [
        "https://i.ibb.co.com/XLdMTMP/t-treasury1.png",
        "https://i.ibb.co.com/9tF9t6S/t-treasury2.png",
        "https://i.ibb.co.com/MZTV6RV/t-treasury3.png",
      ],
      title: "Taste Treasury (Restaurant Management System)",
      description:
        "Taste Treasury is a full-stack restaurant management system built to streamline order management, menu customization, and reservation processes for restaurants.",
      techStack: [
        "MERN Stack",
        "ReactJS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "JWT",
      ],
      features: [
        "Manage restaurant orders efficiently with real-time updates.",
        "Customize and manage the restaurant menu with ease.",
        "Handle reservations and provide users with reservation status updates.",
      ],
      liveLink: "https://taste-treasury.netlify.app",
      clientLink: "https://github.com/Abubokkor98/taste-treasury-client",
      serverLink: "https://github.com/Abubokkor98/taste-treasury-server",
    },

    {
      images: [
        "https://i.ibb.co.com/Vm41zqN/pg1.png",
        "https://i.ibb.co.com/pvJYTc1/pg2.png",
        "https://i.ibb.co.com/6JP8sTG/pg3.png",
      ],
      title: "PlayGear (E-commerce Platform)",
      description:
        "PlayGear is an e-commerce platform focused on selling sports accessories. It includes features such as user authentication, product management, and a dark/light theme toggle.",
      techStack: [
        "ReactJS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "Framer Motion",
      ],
      features: [
        "User authentication for secure access to the platform.",
        "Manage products including adding, updating, and deleting items.",
        "Dark/light theme toggle for better user experience.",
      ],
      liveLink: "https://playgear.netlify.app",
      clientLink: "https://github.com/Abubokkor98/playGear-client",
      serverLink: "https://github.com/Abubokkor98/playGear-server",
    },
  ];

  return (
    <div className="px-4 sm:px-20 py-10">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-12">
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
