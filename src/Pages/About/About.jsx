import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const aboutText =
    "I am Abu Bokkor Siddik, a graduate in Computer Science and Engineering from the National University of Bangladesh. As a Front-end Developer, I specialize in building responsive, user-friendly web applications using HTML, CSS, JavaScript, ReactJS, and TailwindCSS. I also have experience with back-end technologies like MongoDB and Express.js. I’m committed to continuous learning and creating innovative, impactful solutions.";

  return (
    <section id="about" className="py-20 text-gray-800 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <header className="flex justify-between items-center mb-12">
          {/* Header */}
          <h2 className="text-4xl font-bold text-blue-600">About Me</h2>

          {/* Read More Button */}
          <Link
            to={"/about"}
            aria-label="Read more about me"
            className="text-lg text-blue-600 flex items-center space-x-2 hover:text-blue-500 transition-all"
          >
            <span>Read more</span>
            <FaArrowRight />
          </Link>
        </header>

        {/* About Text */}
        <article className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 w-full md:w-10/12">
          <p>{aboutText}</p>
        </article>
      </div>
    </section>
  );
}
