import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = (isActive) =>
    `py-2 text-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-blue-600 font-bold border-b-2 border-blue-600"
        : "text-gray-800"
    } hover:text-blue-600`;

  return (
    <nav className="sticky top-0 w-full z-50 px-4 sm:px-8 py-4 flex items-center justify-between bg-white shadow-md transition-all duration-300">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center text-gray-800 text-3xl font-bold">
          AB
        </div>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`flex-col sm:flex-row flex space-y-4 sm:space-y-0 sm:space-x-8 ${
          isOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/skills", label: "Skills" },
          { to: "/projects", label: "Projects" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => linkStyle(isActive)}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
