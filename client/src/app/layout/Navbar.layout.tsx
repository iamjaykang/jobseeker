import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/";
import { logoutUser } from "../stores/users/user.action";
import { selectUser } from "../stores/users/user.selector";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const [showMenu, setShowMenu] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      buttonRef.current !== e.target
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
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [setShowMenu]);

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
              ref={buttonRef}
              className="navbar__button"
              onClick={handleMenuToggle}
              aria-expanded={showMenu}
              aria-haspopup="true"
            >
              {currentUser.firstName}
              <span className={`navbar__arrow${showMenu ? " open" : ""}`}>
                <MdKeyboardArrowDown />
              </span>
            </button>
            {showMenu && (
              <ul
                role="menu"
                ref={dropdownRef}
                className={`navbar__dropdown${showMenu ? " open" : ""}`}
              >
                <li className="navbar__item">
                  <Link
                    to={`profiles/${currentUser.username}`}
                    className="navbar__link"
                  >
                    Profile
                  </Link>
                </li>
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
