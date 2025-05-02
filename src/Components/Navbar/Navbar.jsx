import React from 'react';
import { NavLink } from 'react-router';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <header className="bg-[#111] text-white px-8 py-4 flex justify-between items-center shadow-md rounded-b-md">
      <div className="text-xl font-bold">Portfolio</div>
      <nav className="space-x-6 hidden md:flex text-sm tracking-wide text-gray-300">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/case-studies">About</NavLink>
        <NavLink to="/testimonials">Project</NavLink>
        <NavLink to="/recent-work">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="space-x-4 hidden md:flex text-gray-400 text-lg">
        <a href="https://github.com/JannatulLima9575/" aria-label="LinkedIn"><FaGithub /></a>
        <a href="//limajannat1675@gmail.com" aria-label="Behance"><GoMail /></a>
        <a href="//www.linkedin.com/in/jannatul-lima-985a25363" aria-label="Twitter"><FaLinkedin /></a>
      </div>
    </header>
    </div>
  );
};

export default Navbar;