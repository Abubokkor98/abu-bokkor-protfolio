import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const ProjectCard = ({ image, title, description, techStack, liveLink, githubLink }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      <motion.img
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-64 object-cover transform transition-transform duration-500 hover:scale-105"
        whileHover={{ scale: 1.1 }}
      />

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-4">
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-500 hover:to-teal-500 transition"
            whileHover={{ scale: 1.05 }}
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt />
          </motion.a>
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
            whileHover={{ scale: 1.05 }}
          >
            <span>GitHub</span>
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
