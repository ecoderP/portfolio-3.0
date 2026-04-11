import React from "react";
import Header from "../../../src/img/header.png";
import Me from "../../../src/img/me.png";
import Wave from "../../../src/img/wave.svg?react";

const Intro = () => {
  return (
    <div id="intro" className="bg-[{Header}] bg-cover bg-center relative">
      <div
        //style={{ backgroundImage: `url(${Header})` }}
        className="intro h-full w-full md:pt-[7rem] md:pb-[3rem] md:px-[0.5rem] px-[1rem] pt-[8rem] pb-[3rem] flex flex-col md:flex-row items-center justify-center relative"
      >
        <div className="intro-overlay absolute top-0 left-0 w-full h-full bg-[#292E49] opacity-70 z-0"></div>
        <p className="intro-left-greeting absolute top-17 md:top-30 left-5 md:left-6 text-2xl text-shadow-lg/40 text-[#f0f0f0] mb-2">
          Hello, I'm ...
        </p>
        <div className="intro-left w-full flex items-center w-1/2 md:flex-1 md:shrink mt-[1rem] md:mt-[3rem]">
          <div className="intro-left-wrapper p-[2rem] md:ml-[1rem] bg-white bg-opacity-50 rounded-lg shadow-lg z-10">
            <h2 className="intro-left-name text-xl font-bold text-[#292E49] text-shadow-lg/10 mb-2">
              PAUL Emeka ONYEBUCHI
            </h2>
            <h2 className="intro-left-title text-2xl md:text-3xl">
              Frontend | Cloud Developer
            </h2>
            <p className="intro-left-desc">
              Aspiring Cloud Developer building and deploying cloud-native web
              apps on AWS.
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
