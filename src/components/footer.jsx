import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import { IoHeartSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full text-center py-4 bg-[#1a2630] text-[#f0f0f0]"
    >
      <nav className="mb-2">
        <a href="#intro" className="mx-2 hover:underline">
          Home
        </a>
        <a href="#about" className="mx-2 hover:underline">
          About
        </a>
        <a href="#projects" className="mx-2 hover:underline">
          Projects
        </a>
        <a href="#articles" className="mx-2 hover:underline">
          Articles
        </a>
      </nav>
      <a
        href="#intro"
        className="hover:underline float-right fixed bottom-4 right-4 bg-[#292E49] text-[#f0f0f0] p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-30"
      >
        <FiChevronsUp className="inline text-3xl" />
      </a>

      <p>
        &copy; {new Date().getFullYear()} Built by Paul E. with{" "}
        {<IoHeartSharp className="inline text-red-500" />}.
      </p>
    </footer>
  );
};

export default Footer;
