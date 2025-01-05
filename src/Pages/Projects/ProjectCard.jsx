import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  viewMoreLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden ">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-64 object-cover "
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
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-500 hover:to-teal-500 transition"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            <span>GitHub</span>
            <FaGithub />
          </a>
          <a
            href={viewMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md  hover:bg-blue-500 transition"
          >
            <span>View More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
