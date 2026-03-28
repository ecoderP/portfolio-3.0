import React from "react";
import SectionBlock from "./section-block";
import SectionLine from "../atoms/section-line";
import { Skills } from "../data_module";
import SkillsBlock from "./skills-block";

const SkillsSection = () => {
  return (
    <SectionBlock>
      <h2 className="skills-title text-2xl font-bold text-[#c4bc21]">Skills</h2>
      <SectionLine />
      <div className="skills-wrapper h-full w-full md:grid md:grid-cols-3 md:grid-flow-rows gap-[1rem]">
        {Skills.map((item) => (
          <SkillsBlock
            style={{
              backgroundColor: "#292E49",
              color: "white",
              border: "1px solid #292E49",
              borderRadius: "8px",
            }}
            key={item.id}
            icon={item.icon}
            skillName={item["skill-name"]}
            desc={item.desc}
          />
        ))}
      </div>
    </SectionBlock>
  );
};

export default SkillsSection;
