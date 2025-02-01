import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 text-gray-800 bg-gray-50 px-4 sm:px-20">
      <header className="mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h2>
      </header>

      {/* About Content */}
      <article className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 w-full md:w-10/12">
        <p>
          Hi, I'm <strong>Abu Bokkor Siddik</strong>, a passionate{" "}
          <strong>Front-End Developer</strong> who loves building interactive, user-friendly, and scalable web applications. 
          With expertise in <strong>React.js, Next.js, and TailwindCSS</strong>, I specialize in crafting modern, high-performance user interfaces.
        </p>

        <p className="mt-4">
        I hold a <strong>BSc in Computer Science and Engineering</strong> from  
          <strong> Shaikh Burhanuddin Post Graduate College, Dhaka</strong> (Graduated: 2023). 
          My academic journey strengthened my skills in <strong>problem-solving, software development, and system design</strong>, 
          shaping my approach to building efficient applications.
        </p>

        <p className="mt-4">
          My technical expertise includes <strong>JavaScript, React Router, REST API integration, and performance optimization</strong>. 
          Additionally, I have hands-on experience with <strong>Node.js, Express.js, and MongoDB</strong>, 
          allowing me to collaborate effectively in full-stack environments.
        </p>

        <p className="mt-4">
          Always eager to learn, I actively explore modern web technologies and best practices to stay ahead in the field. 
          My goal is to contribute to impactful projects that deliver seamless digital experiences.
        </p>
      </article>
    </section>
  );
}
