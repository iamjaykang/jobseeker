import React from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import HomePage from "../../components/home/HomePage.component";
import JobSearchForm from "./JobSearchForm.layout";
import JobListPage from "../../components/jobs/jobList/JobListPage.component";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__search">
        <JobSearchForm />
      </div>
      <main className="app__main">
        <JobListPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
