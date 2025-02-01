import React, { useRef, useEffect } from "react";
import displayImg from "../../assets/home.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";
import { Typed } from "react-typed";

const socialLinks = [
  {
    href: "https://github.com/Abubokkor98",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/abubokkor",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://wa.me/+8801778313311",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
  },
  {
    href: "https://www.facebook.com/ParadoxicalAb",
    label: "Facebook",
    icon: <FaFacebook />,
  },
];

export default function Banner() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: [
          "Front End Developer",
          "React.js Developer",
          "JavaScript Aficionado",
          "Web Enthusiast",
        ],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true,
      });
    }
  }, []);

  return (
    <motion.section
      id="banner"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between text-gray-800 bg-white p-6 sm:p-8 w-full px-4 sm:px-20 mt-12"
    >
      {/* Text Section */}
      <div className="flex-1 text-center sm:text-left ">
        <h5 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600">
          Hello, I&apos;m Abu Bokkor Siddik
        </h5>
        <h1 className="mt-4 font-extrabold text-blue-600 text-2xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight">
          <span ref={typedRef}></span>
        </h1>

        {/* Social Links */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center sm:justify-start mb-7">
            <h2 className="mr-5 text-md sm:text-lg font-semibold">
              Follow me on
            </h2>
            <div className="flex items-center gap-4 text-blue-600 text-xl sm:text-2xl">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-blue-500 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              to="mailto:mail.abubokkor@gmail.com"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-all hover:bg-blue-500 shadow-md"
              aria-label="Email Abu Bokkor Siddik"
            >
              <LuMailOpen />
              Mail me
            </Link>
            <a
              href="https://drive.google.com/file/d/1_CyweUaZC6Zd5_uBrXZBUbbwRNF6fy_D/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-lg transition-all hover:bg-blue-600 hover:text-white shadow-md"
              aria-label="Download Abu Bokkor Siddik's CV"
            >
              <FaArrowDown />
              Download my CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-[280px] md:h-[280px] lg:w-[460px] lg:h-[460px] flex items-center justify-center mt-6 md:mt-0"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={displayImg}
          alt="Abu Bokkor Siddik's profile picture"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
}
