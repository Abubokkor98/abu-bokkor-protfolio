import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReactrouter,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    description:
      "The standard markup language for creating web pages and applications.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    description:
      "A styling language used to design and enhance the visual presentation of web pages.",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-500",
    description:
      "A versatile programming language used for interactive and dynamic web applications.",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-blue-400",
    description:
      "A JavaScript library for building user interfaces with reusable components.",
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
    color: "text-red-400",
    description:
      "A routing library for React that enables navigation between views in a single-page application.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-gray-800",
    description:
      "A React-based framework for building fast, server-side rendered and static websites.",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    color: "text-teal-400",
    description:
      "A utility-first CSS framework that enables rapid UI development with pre-defined classes.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-purple-600",
    description:
      "A popular CSS framework for building responsive and mobile-first web designs.",
  },
  {
    name: "Node.js",
    icon: <FaNode />,
    color: "text-green-500",
    description:
      "A runtime environment that allows JavaScript to be executed on the server side.",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-400",
    description:
      "A fast and minimal Node.js web framework for building APIs and web applications.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    description:
      "A NoSQL database that stores data in flexible, JSON-like documents for scalability.",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-600",
    description:
      "A relational database management system (RDBMS) used for structured data storage.",
  },
];

const Skills = () => {
  return (
    <section className="py-16 text-text bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-10">
          My Skills
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-10/12  lg:w-8/12 mx-auto ">
        {skills.map((card, index) => (
          <div
            key={index}
            className=" border border-teal-500  hover:border-blue-5000 shadow-md rounded-lg p-6 flex flex-col items-center text-center backdrop-blur-sm transition lg:hover:scale-105 duration-1000"
          >
            <div className={`text-4xl  mb-4 ${card.color}`}>{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
            <p className="">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
