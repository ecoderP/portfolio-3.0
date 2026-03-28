import React from "react";
import SectionBlock from "./section-block";
import SectionLine from "../atoms/section-line";
import ProjectsBlock from "./projects-block";
import { PortfolioProjects } from "../data_module";

const Projects = () => {
  return (
    <SectionBlock
      id="projects"
      style={{
        backgroundColor: "#1a2630",
        color: "#FAF9F6",
        paddingBlock: "5rem",
      }}
    >
      <div>
        <h2 className="projects-title text-2xl font-bold text-[#f0f0f0] mb-[1rem]">
          Projects
        </h2>
        <SectionLine style={{ backgroundColor: "#f0f0f0" }} />
        <div className="projects-wrapper h-full w-full flex flex-col gap-[4rem] mt-[2rem]">
          {PortfolioProjects.map((item) => (
            <ProjectsBlock
              style={{
                border: "1px solid #f0f0f0",
                borderRadius: "5px",
                paddingBottom: "2rem",
              }}
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              technologies={item.technologies}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
};

export default Projects;
