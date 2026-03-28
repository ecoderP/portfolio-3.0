import React from "react";
import Header from "../../../src/img/header.png";
import Me from "../../../src/img/me.png";
import Wave from "../../../src/img/wave.svg?react";

const Intro = () => {
  return (
    <div className="bg-[{Header}] bg-cover bg-center relative">
      <div
        //style={{ backgroundImage: `url(${Header})` }}
        className="intro h-full w-full md:pt-[7rem] md:pb-[3rem] md:px-[0.5rem] px-[1rem] pt-[15rem] pb-[3rem] flex flex-col md:flex-row items-center justify-center relative"
      >
        <div className="intro-overlay absolute top-0 left-0 w-full h-full bg-[#292E49] opacity-70 z-0"></div>
        <div className="intro-left w-full flex items-center w-1/2 md:flex-1 md:shrink ">
          <div className="intro-left-wrapper p-[2rem] md:ml-[1rem] bg-white bg-opacity-50 rounded-lg shadow-lg z-10">
            <h2 className="intro-left-name text-xl font-bold text-[#c4bc21]">
              <span className="text-[#c4bc21]">I'm</span> PAUL ONYEBUCHI
            </h2>
            <h2 className="intro-left-title">
              Cloud Developer | Software Engineer
            </h2>
            <p className="intro-left-desc">
              Cloud Developer with experience in building and deploying
              applications on cloud platforms.
            </p>
          </div>
        </div>
        <div className="intro-right md:flex-1 md:shrink h-1/2 w-full h-80 flex items-center justify-center">
          <div className="intro-right-wrapper w-full p-[2rem]">
            <img
              src={Me}
              alt="My photo"
              className="intro-right-img mask-contain rounded-full relative  md:mask-contain"
            />
          </div>
        </div>
      </div>
      <div className="intro-wave  bottom-0 left-0 w-full">
        <img src={Wave} alt="Wave" />
      </div>
    </div>
  );
};

export default Intro;
