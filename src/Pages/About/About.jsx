import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 text-gray-800 bg-gray-50 px-4 sm:px-20"
    >
      <header className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          About Me
        </motion.h2>
      </header>

      {/* About Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg leading-relaxed text-gray-700 text-left mb-6 w-full lg:w-10/12"
      >
        <p>
          Hi, I'm <strong>Abu Bokkor Siddik</strong>, a passionate{" "}
          <strong>Front-End Developer</strong> focused on creating interactive
          and user-centric web applications. My programming journey began in my
          university, where I discovered my love for coding and problem-solving.
          After learning C and C++, I transitioned to web development and found
          my passion in JavaScript, React.js, and Next.js.
        </p>

        <p className="mt-4">
          I enjoy building seamless, responsive, and engaging user interfaces. I
          take pride in transforming complex requirements into intuitive
          designs, whether it's crafting components or implementing animations.
          My goal is always to deliver high-quality, performant web
          applications, whether solo or in a team.
        </p>

        <p className="mt-4">
          As a person, I’m always eager to learn, grow, and embrace new
          challenges. I value collaboration, meaningful connections, and
          contributing to projects that make a positive impact. My goal is to
          create applications that are both functional and enjoyable for users.
        </p>

        <p className="mt-4">
          I’m excited about the future of web development and the opportunities
          it holds. My goal is to continue building my skills, collaborating
          with like-minded individuals, and contributing to impactful projects
          that make a difference in the world.
        </p>
      </motion.article>
    </section>
  );
}
