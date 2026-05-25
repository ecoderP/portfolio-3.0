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
            I am a Cloud Engineer with a background in Chemical Engineering and
            multidisciplinary experience across municipal water systems and
            infrastructure, web development and strategic stakeholder
            engagement. I develop cloud-based solutions by combining AWS
            services with modern fronend frameworks such as React, with a
            emphasis on scalability, performanace and maintanability.
          </p>

          <p className=" ">
            I’m continuously developing my skills in cloud architecture and
            software engineering, with a focus on designing and deploying
            production-ready applications.
          </p>

          <p className=" ">
            I’m currently open to opportunities where I can contribute to
            cloud-based systems and continue growing in the cloud space. Feel
            free to reach out or connect with me.
          </p>
          <div className="about-socials mt-[1rem] border-s-4 text-2xl">
            <p className="mx-[1rem] text-2xl my-[1rem] text-shadow-lg-50 text-[#292E49]">
              {" "}
              Let's Connect:
            </p>
            <a
              href="https://x.com/paulemi?s=21"
              className="inline-block mx-[1rem] px-[0.5rem] py-[0.25rem] bg-[#292E49] text-white rounded-full"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/paulonyebuchi"
              className="inline-block mr-[1rem] px-[0.5rem] py-[0.25rem] bg-[#292E49] text-white rounded-full"
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
