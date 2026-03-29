import React from "react";

const LinkButton = ({ children, url, style, target, className }) => {
  return (
    <a
      href={url}
      target={target}
      rel="noopener noreferrer"
      style={style}
      className={className}
    >
      {children}
    </a>
  );
};

export default LinkButton;
