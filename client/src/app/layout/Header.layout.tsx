import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom/";
import { useScreenWidth } from "../utils/screenWidth.util";
import MobileNavbar from "./MobileNavbar.layout";
import Navbar from "./Navbar.layout";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  return (
    <header className="app__header">
      <div className="app__branding">
        <Link to="/" className="branding__logo">
          <FaBriefcase /> <span className="branding__text">Job Seeker</span>
        </Link>
      </div>
      {isMobile ? <MobileNavbar /> : <Navbar />}
    </header>
  );
};

export default Header;
