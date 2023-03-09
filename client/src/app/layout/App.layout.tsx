import React from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import JobSearchForm from "./JobSearchForm.layout";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../components/home/HomePage.component";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      <div className="app__search">
        <JobSearchForm />
      </div>
      <main className="app__main">
        {location.pathname === "/" ? <HomePage /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
