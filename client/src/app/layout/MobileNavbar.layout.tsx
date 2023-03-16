import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom/";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="header__mobile-navbar">
      <button className="mobile-navbar__menu-toggle" onClick={handleMenuToggle}>
        Menu
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      <ul className={`mobile-navbar__dropdown${isOpen ? " open" : ""}`}>
        <li className="mobile-navbar__item">
          <Link
            className="mobile-navbar__link"
            to="/browse-jobs"
            onClick={handleMenuToggle}
          >
            Browse Jobs
          </Link>
        </li>
        <li className="mobile-navbar__item">
          <Link
            className="mobile-navbar__link"
            to="/post-job"
            onClick={handleMenuToggle}
          >
            Post a Job
          </Link>
        </li>
        <li className="mobile-navbar__item">
          <Link
            className="mobile-navbar__link"
            to="/login"
            onClick={handleMenuToggle}
          >
            Login
          </Link>
        </li>
        <li className="mobile-navbar__item">
          <Link
            className="mobile-navbar__link"
            to="/sign-up"
            onClick={handleMenuToggle}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
