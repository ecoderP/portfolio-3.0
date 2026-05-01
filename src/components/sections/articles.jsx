import React from "react";
import SectionBlock from "./section-block";
import SectionLine from "../atoms/section-line";
import ArticleBlocks from "./article-blocks";
import { Articles } from "../data_module";

const ArticlesSection = () => {
  return (
    <SectionBlock id="articles">
      <h2>Articles</h2>
      <SectionLine />
      <div className="projects-wrapper h-full w-full flex flex-col gap-[4rem] mt-[2rem]">
        {Articles.map((item) => (
          <ArticleBlocks
            style={{ border: "1px solid cadetblue" }}
            key={item.id}
            title={item.articleTitle}
            description={item.desc}
            link={item.link}
            image={item.img}
          />
        ))}
      </div>
    </SectionBlock>
  );
};

export default ArticlesSection;
