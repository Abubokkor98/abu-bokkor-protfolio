import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center mb-12">
          {/* Header */}
          <div className="h-text">
            <h2 className="text-4xl font-bold">About</h2>
          </div>

          {/* Read More Button */}
          <div className="h-btn">
            <Link to={'/about'} className="text-lg text-[#a6bbcc] flex items-center space-x-2 hover:text-white transition-all">
              <span>Read more</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        {/* About Text */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          I am Abu Bokkor Siddik,<br /> 
          I recently graduated in Computer Science and Engineering from the National University of Bangladesh. <br />
          As a Front-end Website Designer specializing in crafting visually stunning and user-centric portfolio websites, I bring a blend of creativity and technical proficiency to every project. With a keen eye for design aesthetics and a solid foundation in HTML, CSS, and JavaScript, I transform ideas into captivating and responsive web experiences.<br />
          I am very passionate about improving my coding skills & developing applications & websites.
        </p>
      </div>
    </section>
  );
}
