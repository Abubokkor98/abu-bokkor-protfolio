import React from "react";
import displayImg from "../../assets/home.png";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";

const socialLinks = [
  {
    href: "https://github.com/Abubokkor98",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://t.me/AbuBokkor98",
    label: "Telegram",
    icon: <FaTelegram />,
  },
  {
    href: "https://twitter.com/AB_coc",
    label: "Twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.facebook.com/ParadoxicalAb",
    label: "Facebook",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.instagram.com/axdab/",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

export default function Banner() {
  return (
    <section
      id="banner"
      className="flex flex-col md:flex-row items-center justify-between text-gray-800 bg-white p-8 md:p-14 rounded-lg shadow-lg"
    >
      {/* Text Section */}
      <div className="flex-1">
        <h5 className="text-2xl font-medium text-gray-600">
          Hello, I'm Abu Bokkor Siddik
        </h5>
        <h1 className="mt-4 font-extrabold text-blue-600 text-5xl md:text-6xl leading-tight">
          Front End <br /> Developer
        </h1>

        {/* Social Links */}
        <div className="mt-6">
          <div className="flex items-center mb-7">
            <h2 className="mr-5 text-lg font-semibold">Follow me on</h2>
            <div className="flex items-center gap-4 text-blue-600 text-xl">
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
          <div className="flex gap-4">
            <Link
              to="mailto:abubokkorsiddik698@hotmail.com"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-all hover:bg-blue-500 shadow-md"
              aria-label="Email Abu Bokkor Siddik"
            >
              <LuMailOpen />
              Mail me
            </Link>
            <a
              href="https://drive.google.com/file/d/1oW7zbt3rhbwYBF_Z7zWGEqjb3P7f4NYi/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-lg transition-all hover:bg-blue-600 hover:text-white shadow-md"
              aria-label="Download Abu Bokkor Siddik's CV"
            >
              <FaArrowDown />
              Download my CV
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[460px] h-[460px] flex items-center justify-center mt-6 md:mt-0">
        <img
          src={displayImg}
          alt="Abu Bokkor Siddik's profile picture"
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </section>
  );
}
