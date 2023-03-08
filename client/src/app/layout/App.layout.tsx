import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css"

function App() {
  const [jobs, setJobs] = useState<any>();

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs").then((response) => {
      setJobs(response.data);
    });
  });
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <h1 className="main__heading">Find Your Dream Job</h1>
        <p className="main__subheading">
          Search through our job listings and find the right fit for you.
        </p>
        <form className="job-search-form">
          <input
            className="job-search-form__input"
            type="text"
            placeholder="Enter keywords"
          />
          <input
            className="job-search-form__input"
            type="text"
            placeholder="Any classification"
          />
          <input
            className="job-search-form__input"
            type="text"
            placeholder="Enter city"
          />
          <button className="job-search-form__button" type="submit">
            Search
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
