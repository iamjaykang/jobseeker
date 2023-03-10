import React from "react";
import { Link } from "react-router-dom/";

const Navbar = () => {
  return (
    <nav className="header__navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link className="navbar__link" to="/browse-jobs">
            Browse Jobs
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/post-job">
            Post a Job
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/login">
            Login
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/sign-up">
            Sign Up
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/errors">
            Errors
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
