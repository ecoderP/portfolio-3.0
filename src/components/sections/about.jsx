import React from "react";
import SectionBlock from "./section-block";
import SectionLine from "../atoms/section-line";
import Header from "../../../src/img/header.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <SectionBlock id="about">
      <h2 className="about-title text-2xl font-bold text-[#292E49]">
        About Me
      </h2>
      <SectionLine />
      <div className="about-wrapper h-full w-full md:flex md:items-center md:justify-between flex-col md:flex-row">
        <div className="about-left w-full md:w-2/3">
          <p className="">
            I am a Software / Cloud Engineer with 5+ years experience building
            WordPress websites for real customers. Most recently I've been deep
            in React, JavaScript, and AWS Cloud — but I started my career in
            Chemical Engineering. That foundational infrastructure experience
            still shapes how I build. I write code assuming someone else (often
            future-me) has to read, run, and debug it at 2am.
          </p>
          <div className="about-socials mt-[1rem] border-s-4 text-2xl">
            <p className="mx-[1rem] text-2xl my-[1rem] text-shadow-lg-50 text-[#292E49]">
              {" "}
              Let's Connect:
            </p>
            <a
              href="https://www.linkedin.com/in/paulonyebuchi"
              className="inline-block mx-[1rem] px-[0.5rem] py-[0.25rem] bg-[#292E49] text-white rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.github.com/ecoderP"
              className="inline-block mr-[1rem] px-[0.5rem] py-[0.25rem] bg-[#292E49] text-white rounded-full"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Header})` }}
          className="about-right hidden md:block md:w-1/3 h-80 w-full bg-cover bg-center rounded-lg"
        >
          {" "}
        </div>
      </div>
    </SectionBlock>
  );
};

export default About;
