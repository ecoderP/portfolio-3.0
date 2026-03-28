import React from "react";

const SkillsBlock = ({ icon, skillName, desc, style }) => {
  return (
    <div
      style={style}
      className="w-full h-auto p-[1rem] mb-[1rem] md:mb-[0rem]"
    >
      <div className="skill-icon my-[1rem] text-3xl">{icon}</div>
      <h3 className="skill-name mb-[1rem] text-2xl">{skillName}</h3>
      <p className="skill-description mb-[1rem]">{desc}</p>
    </div>
  );
};

export default SkillsBlock;
