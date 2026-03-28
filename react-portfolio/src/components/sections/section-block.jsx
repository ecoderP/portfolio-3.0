import React from "react";

const SectionBlock = ({ children, style, id }) => {
  return (
    <section
      style={style}
      className="section-block h-full w-full my-[5rem] px-[2rem] md:my-[10rem]"
      id={id}
    >
      {children}
    </section>
  );
};

export default SectionBlock;
