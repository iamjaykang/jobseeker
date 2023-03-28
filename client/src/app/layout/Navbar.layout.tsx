import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/";
import { logoutUser } from "../stores/users/user.action";
import { selectUser } from "../stores/users/user.selector";

const Navbar = () => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
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
        {currentUser ? (
          <>
            <li className="navbar__item">
              <button
                className="navbar__button"
                onClick={() => dispatch(logoutUser())}
              >
                Log out
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
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
