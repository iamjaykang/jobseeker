import React from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import { ScrollRestoration, useParams } from "react-router-dom/";
import JobPostSearchForm from "./JobPostSearchForm.layout";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../components/home/HomePage.component";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const {id} = useParams();
  const visiblePaths = ["/", "/browse-jobs", `/browse-jobs/${id}`];
  const isSearchFormVisible = visiblePaths.includes(location.pathname);
  return (
    <div className="app">
      <ScrollRestoration />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      {isSearchFormVisible && (
        <div className="app__search">
          <JobPostSearchForm />
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
