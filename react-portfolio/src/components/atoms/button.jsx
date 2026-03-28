import React from "react";

const LinkButton = ({ children, url, style, target }) => {
  return (
    <a
      href={url}
      target={target}
      rel="noopener noreferrer"
      style={style}
      className=" text-white py-2"
    >
      {children}
    </a>
  );
};

export default LinkButton;
