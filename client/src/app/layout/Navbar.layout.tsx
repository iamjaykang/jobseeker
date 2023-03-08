import React from 'react'

const Navbar = () => {
  return (
    <nav className="header__navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Browse Jobs
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Post a Job
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Login
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar