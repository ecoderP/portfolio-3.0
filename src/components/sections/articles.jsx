import React from "react";
import SectionBlock from "./section-block";
import SectionLine from "../atoms/section-line";

const Articles = () => {
  return (
    <SectionBlock id="articles">
      <h2>Articles</h2>
      <SectionLine />
      <p>Here are some of my articles...</p>
    </SectionBlock>
  );
};

export default Articles;
