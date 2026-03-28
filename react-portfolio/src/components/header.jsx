import React, { useState } from "react";
import MobileNav from "./sections/mobile-nav";
import DesktopNav from "./sections/Desktop-nav";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="w-full h-20 bg-[#292E49] text-[#f0f0f0] flex items-center justify-between px-4 top-0 left-0 z-50">
      <h1 className="z-70">Paul</h1>

      {/* Mobile Navigation */}
      <div onClick={toggleMobileNav} className="cursor-pointer md:hidden">
        {isMobileNavOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <HiBars3CenterLeft className="text-2xl" />
        )}
      </div>
      <MobileNav
        style={
          isMobileNavOpen
            ? "flex flex-col justify-center items-center"
            : "hidden"
        }
        closeNav={closeMobileNav}
      />

      {/* Desktop Navigation */}
      <DesktopNav />
    </header>
  );
};

export default Header;
