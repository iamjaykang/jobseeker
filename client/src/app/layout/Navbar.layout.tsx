import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/";
import { logoutUser } from "../stores/users/user.action";
import { selectUser } from "../stores/users/user.selector";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const currentUser = useSelector(selectUser);
  const [showMenu, setShowMenu] = useState(false);

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const dispatch = useDispatch();

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownButtonRef.current &&
      !dropdownButtonRef.current.contains(e.target as Node) &&
      e.target !== dropdownButtonRef.current
    ) {
      setShowMenu(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
          <li className="navbar__item" style={{ position: "relative" }}>
            <button
              ref={dropdownButtonRef}
              className="navbar__button"
              onClick={handleMenuToggle}
            >
              {currentUser.firstName}
            <span className={`navbar__arrow${showMenu ? " open" : ""}`}>
              <MdKeyboardArrowDown />
            </span>
            </button>
            {showMenu && (
              <ul className={`navbar__dropdown${showMenu ? " open" : ""}`}>
                <li className="navbar__item">
                  <button className="navbar__button" onClick={handleLogout}>
                    Log out
                  </button>
                </li>
              </ul>
            )}
          </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
