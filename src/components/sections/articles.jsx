import React from "react";
import SectionBlock from "./section-block";
import SectionLine from "../atoms/section-line";
import ArticleBlocks from "./article-blocks";

const Articles = () => {
  return (
    <SectionBlock id="articles">
      <h2>Articles</h2>
      <SectionLine />
        <ArticleBlocks />
    </SectionBlock>
  );
};

export default Articles;
