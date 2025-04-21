import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ use NavLink instead of Link
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold cursor-pointer">Muhammad Asad</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-1 transition duration-300 hover:text-[#38bdf8] ${
                    isActive
                      ? "text-[#38bdf8] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#38bdf8]"
                      : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0f172a] px-6 pb-6 space-y-4 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block transition hover:text-[#38bdf8] ${
                    isActive ? "text-[#38bdf8] font-semibold underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
