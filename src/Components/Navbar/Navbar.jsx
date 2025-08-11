import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-11/12 mx-auto">
      <header className="bg-[#111] text-white px-8 py-4 flex justify-between items-center shadow-md rounded-b-md">
        {/* Logo */}
        <div className="text-xl font-bold">Portfolio</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 text-sm tracking-wide text-gray-300 absolute md:static bg-[#111] w-full md:w-auto left-0 top-16 md:top-0 px-8 md:px-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink to="/" className="py-2 md:py-0">
            Home
          </NavLink>
          <NavLink to="/about" className="py-2 md:py-0">
            About
          </NavLink>
          <NavLink to="/project" className="py-2 md:py-0">
            Project
          </NavLink>
          <NavLink to="/skills" className="py-2 md:py-0">
            Skills
          </NavLink>
          <NavLink to="/education" className="py-2 md:py-0">
            Education
          </NavLink>
          <NavLink to="/contact" className="py-2 md:py-0">
            Contact
          </NavLink>
        </nav>

        {/* Social Icons + Contact */}
        <div
          className={`md:flex-row md:flex md:items-center md:space-x-4 text-gray-400 text-lg absolute md:static bg-[#111] w-full md:w-auto left-0 top-60 md:top-0 gap-3 px-8 md:px-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="https://github.com/JannatulLima9575/"
            aria-label="GitHub"
            className="py-2 md:py-0"
          >
            <FaGithub />
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=limajannat1675@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="py-2 md:py-0"
          >
            <GoMail />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jannatul-lima-985a25363"
            aria-label="LinkedIn"
            className="py-2 md:py-0"
          >
            <FaLinkedin />
          </a>

          {/* WhatsApp Number (optional) */}
          <a
            href="https://wa.me/8801301559575"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="py-2 md:py-0"
          >
            <FaWhatsapp />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;