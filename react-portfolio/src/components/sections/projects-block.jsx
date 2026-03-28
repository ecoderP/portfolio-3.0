import React from "react";
import LinkButton from "../atoms/button";
import { FiChevronsRight } from "react-icons/fi";

const ProjectsBlock = ({
  title,
  img,
  description,
  technologies,
  link,
  style,
}) => {
  return (
    <div
      style={style}
      className="w-full md:w-full h-auto border-s-4 bg-[#292E49] border-[#292E49] text-white mb-[1rem] md:mb-[0rem] z-30"
    >
      <h3 className="bg-[#1a2630] p-[2rem]">{title}</h3>
      <div className="p-[1rem] flex flex-col gap-[1rem] md:flex-row">
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <p>{description}</p>
          <p>Technologies: {technologies.join(", ")}</p>
          <LinkButton
            url={link}
            target="_blank"
            style={{
              display: "block",
              marginTop: "1rem",
              "text-decoration": "underline",
            }}
          >
            <FiChevronsRight className="inline" />
            See Documentation
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
