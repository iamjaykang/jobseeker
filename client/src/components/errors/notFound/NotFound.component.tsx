import React from "react";
import { Link } from "react-router-dom/";
import "./notFound.styles.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__header">404 - Page Not Found</h1>
      <p className="not-found-page__message">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-page__button">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
