import React from "react";
import LinkButton from "../atoms/button";

const Navbar = () => {
  return (
    <nav className="nav_links mr-[10rem] top-5 text-lg font-bold hidden md:flex gap-10 justify-center items-center z-70">
      <a href="#about">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#articles" title="Footer">
        Articles
      </a>
      <div>
        <LinkButton
          url="#projects"
          style={{
            color: "#f0f0f0",
            backgroundColor: "red",
            padding: "0.5rem 1rem",
            zIndex: 70,
            marginLeft: "5rem",
          }}
        >
          Hire Me
        </LinkButton>
      </div>
    </nav>
  );
};

export default Navbar;
