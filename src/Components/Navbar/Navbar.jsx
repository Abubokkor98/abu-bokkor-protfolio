import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
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
      {/* Brand Logo */}
      <Link to="/">
        <div className="flex items-center text-gray-800 text-3xl font-bold">
          AB
        </div>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={toggleDrawer}
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

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <button
          className="absolute top-4 left-4 text-gray-800"
          onClick={toggleDrawer}
        >
          <svg
            className="w-6 h-6"
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
        </button>
        <ul className="mt-12 space-y-4">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${linkStyle(isActive)} block px-6`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Nav Links for Desktop */}
      <ul className="hidden sm:flex space-x-8">
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
