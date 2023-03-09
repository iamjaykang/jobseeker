import React from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import { useParams } from "react-router-dom/";
import JobSearchForm from "./JobSearchForm.layout";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../components/home/HomePage.component";

function App() {
  const location = useLocation();
  const {id} = useParams();
  const hiddenPaths = [`/browse-jobs/${id}`];
  const isSearchFormVisible = !hiddenPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div className="app">
      <Header />
      {isSearchFormVisible && (
        <div className="app__search">
          <JobSearchForm />
        </div>
      )}
      <main className="app__main">
        {location.pathname === "/" ? <HomePage /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
