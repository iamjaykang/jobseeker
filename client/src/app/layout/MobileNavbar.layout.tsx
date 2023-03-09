import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
          <a className="mobile-navbar__link" href="/browse-jobs">
            Browse Jobs
          </a>
        </li>
        <li className="mobile-navbar__item">
          <a className="mobile-navbar__link" href="/post-job">
            Post a Job
          </a>
        </li>
        <li className="mobile-navbar__item">
          <a className="mobile-navbar__link" href="/login">
            Login
          </a>
        </li>
        <li className="mobile-navbar__item">
          <a className="mobile-navbar__link" href="/sign-up">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
