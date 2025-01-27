import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaCloud,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: <FaHtml5 size={32} className="text-blue-600" /> },
      { name: "CSS", icon: <FaCss3Alt size={32} className="text-blue-600" /> },
      {
        name: "ReactJS",
        icon: <FaReact size={32} className="text-blue-600" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={32} className="text-blue-600" />,
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNode size={32} className="text-blue-600" /> },
      {
        name: "Express.js",
        icon: <SiExpress size={32} className="text-blue-600" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={32} className="text-blue-600" />,
      },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      {
        name: "Git & GitHub",
        icon: <FaGithub size={32} className="text-blue-600" />,
      },
      {
        name: "Firebase",
        icon: <FaCloud size={32} className="text-blue-600" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-16 text-gray-800 bg-gray-50">
      <div className="px-4 sm:px-20 text-center">
        <h2 className="text-5xl font-extrabold text-blue-600 mb-8">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={index}
              className="rounded-xl shadow-lg p-8  bg-white"
              aria-labelledby={`skill-category-${index}`}
            >
              <h3
                id={`skill-category-${index}`}
                className="text-2xl font-semibold text-blue-600 mb-4"
              >
                {skill.category}
              </h3>
              <Marquee
                speed={80}
                pauseOnHover={false}
                gradient={false}
                direction="left"
              >
                <div className="flex flex-wrap justify-center gap-8 mb-4">
                  {skill.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-gray-800"
                      aria-label={item.name}
                      title={item.name}
                    >
                      <div className="p-4 rounded-full shadow-md mb-4 bg-gray-100">
                        {item.icon}
                      </div>
                      <span className="text-lg">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Marquee>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
