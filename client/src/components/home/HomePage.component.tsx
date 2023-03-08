import React from "react";
import "./homePage.styles.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__heading">Find Your Dream Job</h1>
      <p className="homepage__subheading">
        Search through our job listings and find the right fit for you.
      </p>
      <form className="homepage__form">
        <input
          className="homepage__form-input"
          type="text"
          placeholder="Enter keywords"
        />
        <input
          className="homepage__form-input"
          type="text"
          placeholder="Any classification"
        />
        <input
          className="homepage__form-input"
          type="text"
          placeholder="Enter city"
        />
        <button className="homepage__form-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HomePage;
