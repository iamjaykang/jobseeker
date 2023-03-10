import React from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import { ScrollRestoration, useParams } from "react-router-dom/";
import JobSearchForm from "./JobSearchForm.layout";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../components/home/HomePage.component";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const { id } = useParams();
  const hiddenPaths = [
    `/browse-jobs/${id}`,
    "/post-job",
    `/manage/${id}`,
    "/not-found",
  ];
  const isSearchFormVisible = !hiddenPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div className="app">
      <ScrollRestoration />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
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
