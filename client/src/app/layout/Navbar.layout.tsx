import React from "react";

const Navbar = () => {
  return (
    <nav className="header__navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a className="navbar__link" href="/browse-jobs">
            Browse Jobs
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/post-job">
            Post a Job
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/login">
            Login
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/sign-up">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
