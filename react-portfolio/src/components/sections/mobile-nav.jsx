import React from "react";
import LinkButton from "../atoms/button";

const MobileNav = ({ style, closeNav }) => {
  return (
    <nav
      className={`mobile-nav h-full w-1/2 bg-[#292E49] border-l border-[#292E49]  text-white absolute top-21 right-0 z-40 ${style}`}
    >
      <ul className="text-lg font-bold flex flex-col gap-[2rem]">
        <li onClick={closeNav}>
          <a href="#about">About Me</a>
        </li>
        <li onClick={closeNav}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={closeNav}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={closeNav}>
          <a href="#articles">Articles</a>
        </li>
        <li onClick={closeNav}>
          <LinkButton
            href="#contact"
            style={{ backgroundColor: "red", padding: "0.5rem 1rem" }}
          >
            Hire Me
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
