import React from "react";

const ArticleBlocks = ({ style, title, link, image }) => {
  return (
    <>
      {/*---- Mobile articles Block ---*/}
      <a
        href={link}
        target="_blank"
        className="Mobile sm:hidden block text-blue-500"
      >
        {title}
      </a>
      {/*---- Desktop view articles Block ------*/}
      <div className="w-80 flex">
        <a
          href={link}
          target="_blank"
          className="Desktop hidden sm:block w-50 h-auto p-4 text-blue-500 "
          style={style}
        >
          <img src={image} alt="" />
          <p className="pt-4">{title}</p>
        </a>
      </div>
    </>
  );
};

export default ArticleBlocks;
