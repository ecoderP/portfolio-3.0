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
            I’m an AWS Certified Cloud Practitioner focused on building
            cloud-native web applications using services like AWS Lambda, API
            Gateway, DynamoDB, and S3. I develop full-stack solutions by
            combining these services with modern frontend frameworks such as
            React, with an emphasis on scalability, performance, and
            maintainability.
          </p>
          <p className=" ">
            I’ve worked on projects that involve deploying applications to AWS,
            setting up CI/CD pipelines, and optimizing delivery using services
            like CloudFront. My approach is centered on building systems that
            are not only functional but also efficient and reliable in
            real-world use.
          </p>
          <p className=" ">
            I’m continuously developing my skills in cloud architecture and
            software engineering, with a focus on designing and deploying
            production-ready applications.
          </p>
          <p className=" ">
            Outside of tech, I enjoy spending time outdoors and exploring
            science fiction and fantasy—interests that keep me curious and
            constantly thinking about new ideas and possibilities.
          </p>
          <p className=" ">
            I’m currently open to opportunities where I can contribute to
            cloud-based systems and continue growing as a developer. Feel free
            to reach out or connect with me.
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
