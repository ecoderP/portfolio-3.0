import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_logo">
          <Link to="/">
            <h1>Paul</h1>
          </Link>
        </div>
        <div className="nav_links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
