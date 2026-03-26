import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#c4bc21] text-white py-2 px-4 rounded-full"
    >
      {text}
    </button>
  );
};

export default Button;
