import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 right-0 w-full z-[1000] px-4 sm:px-16 py-6 flex items-center justify-between bg-gray-800 transition-all duration-700">
      <Link to="/">
        <div className="flex items-center text-white text-2xl font-semibold">
          AB`
        </div>
      </Link>
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className="py-1 text-white text-base font-normal border-b-2 border-transparent transition-all duration-700 hover:border-[#a6bbcc] hover:text-[#a6bbcc]"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="py-1 text-white text-base font-normal border-b-2 border-transparent transition-all duration-700 hover:border-[#a6bbcc] hover:text-[#a6bbcc]"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="py-1 text-white text-base font-normal border-b-2 border-transparent transition-all duration-700 hover:border-[#a6bbcc] hover:text-[#a6bbcc]"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className="py-1 text-white text-base font-normal border-b-2 border-transparent transition-all duration-700 hover:border-[#a6bbcc] hover:text-[#a6bbcc]"
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="py-1 text-white text-base font-normal border-b-2 border-transparent transition-all duration-700 hover:border-[#a6bbcc] hover:text-[#a6bbcc]"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
