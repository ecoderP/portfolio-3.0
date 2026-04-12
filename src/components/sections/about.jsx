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
            I'm an AWS Certified Cloud Professional and I build cloud-native web
            applications using AWS services such as Lambda, API Gateway,
            DynamoDB, and S3. I combine these technologies with frontend
            frameworks like React JS to build scalable solutions. I am
            passionate about leveraging cloud technologies to create efficient
            and innovative solutions that deliver high-quality applications that
            meet user needs and drive business success. I also want to continue
            learning and growing while I do that.
          </p>
          <p className=" ">
            When I'm not working, I like to take long walks on the trail and
            just be out in nature. I'm also a big fan of science fiction and
            fantasy movies. I love exploring new worlds and stories through
            these mediums.
          </p>
          <p className=" ">
            I'm actively looking for new opportunities to learn and grow, so if
            you have any questions or just want to connect, feel free to find me
            on social media or reach out!
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
