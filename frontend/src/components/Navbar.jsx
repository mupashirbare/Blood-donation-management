import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-[#B22222] text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Blood Donation</div>

        {/* Hamburger Icon */}
        <div
          className="text-2xl md:hidden cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#B22222] md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${
            navOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#home"
              className="block py-2 md:py-0 md:inline-block text-lg hover:text-[#F8F9FA]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 md:py-0 md:inline-block text-lg hover:text-[#F8F9FA]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block py-2 md:py-0 md:inline-block text-lg hover:text-[#F8F9FA]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 md:py-0 md:inline-block text-lg hover:text-[#F8F9FA]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
