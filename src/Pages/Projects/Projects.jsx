import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "PlayGear",
    description:
      "A sports accessories e-commerce website featuring user authentication, product management, dark/light theme toggle, and detailed product animations.",
    link: "https://playgear.netlify.app",
    repo: "https://github.com/Abubokkor98/playgear",
    details: "/playgear-details",
    techStack: [<SiReact />, <SiTailwindcss />, <SiMongodb />, <FaNodeJs />],
    image: "https://i.ibb.co.com/GJMxjwf/Screenshot-38.png",
  },
  {
    name: "Taste Treasury",
    description:
      "A full-stack restaurant management website built with the MERN stack, including features like menu management and reservation systems.",
    link: "https://taste-treasury.netlify.app/",
    repo: "https://github.com/Abubokkor98/taste-treasury-client",
    details: "/taste-treasury-details",
    techStack: [<SiReact />, <SiTailwindcss />, <SiMongodb />, <FaNodeJs />],
    image: "https://i.ibb.co.com/tq9TQk9/tastetreasury.png",
  },
  // More projects
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-blue-600 mb-8">Projects</h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative text-gray-800 shadow-xl rounded-xl overflow-hidden group transform transition duration-300 ease-in-out hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative h-56">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4 mb-4">
                  {project.techStack.map((icon, index) => (
                    <div
                      key={index}
                      className="text-2xl text-blue-600 group-hover:text-teal-500 transition duration-300"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-teal-500 flex items-center space-x-1 font-medium transition duration-300"
                  >
                    <FaLink /> <span>View Project</span>
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-teal-500 flex items-center space-x-1 font-medium transition duration-300"
                  >
                    <FaGithub /> <span>GitHub</span>
                  </a>
                </div>
                <div className="flex justify-center">
                  <Link
                    to={project.details}
                    className="text-teal-500 hover:text-teal-600 bg-gray-800 px-4 py-2 rounded-md text-lg font-medium transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
