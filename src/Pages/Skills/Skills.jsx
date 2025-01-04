import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub, FaCloud } from "react-icons/fa";  
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: <FaHtml5 size={28} className="text-[#a6bbcc]" /> },
      { name: "CSS", icon: <FaCss3Alt size={28} className="text-[#a6bbcc]" /> },
      { name: "ReactJS", icon: <FaReact size={28} className="text-[#a6bbcc]" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={28} className="text-[#a6bbcc]" /> },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNode size={28} className="text-[#a6bbcc]" /> },
      { name: "Express.js", icon: <SiExpress size={28} className="text-[#a6bbcc]" /> },
      { name: "MongoDB", icon: <SiMongodb size={28} className="text-[#a6bbcc]" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", icon: <FaGithub size={28} className="text-[#a6bbcc]" /> },
      { name: "Firebase", icon: <FaCloud size={28} className="text-[#a6bbcc]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 text-center text-[#fff]">
        <h2 className="text-4xl font-extrabold text-[#a6bbcc] mb-8">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#a6bbcc] mb-4">{skill.category}</h3>
              <div className="flex flex-wrap justify-center gap-6 mb-4">
                {skill.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-[#fff]"
                  >
                    <div className="bg-gradient-to-r p-3 rounded-full shadow-md mb-2">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
