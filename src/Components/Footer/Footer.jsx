import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-4 sm:px-20">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Abu Bokkor Siddik</h3>
            <p className="text-gray-400">Frontend Developer | React Enthusiast</p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/Abubokkor98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abubokkor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/AbuBokkor98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:mail.abubokkor@gmail.com"
              className="text-teal-500 hover:text-teal-400 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-gray-400">&copy; 2025 Abu Bokkor Siddik. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
