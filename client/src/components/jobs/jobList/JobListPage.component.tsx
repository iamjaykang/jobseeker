import axios from "axios";
import React, { useEffect, useState } from "react";
import { Job } from "../../../app/models/job";
import JobList from "./JobList.component";
import "./jobListPage.styles.css";

const JobListPage = () => {
  const [jobs, setJobs] = useState<Job[]>();

  useEffect(() => {
    axios.get<Job[]>("http://localhost:5000/api/jobs").then((response) => {
      setJobs(response.data);
    });
  }, [setJobs]);
  return (
    <div className="job-list-page">
      {jobs ? <JobList jobs={jobs} /> : <p>Loading...</p>}
    </div>
  );
};

export default JobListPage;
