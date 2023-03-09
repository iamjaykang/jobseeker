import React, { useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import { Job } from "../../../app/models/job";
import { convertUtcToLocal } from "../../../app/utils/convertUtcToLocal.util";
import JobList from "./JobList.component";
import "./jobListPage.styles.css";

const JobListPage = () => {
  const [jobs, setJobs] = useState<Job[]>();

  useEffect(() => {
    const loadJobs = async () => {
      const response = await agent.Jobs.list();
      const updatedJobs = response.map((job) => {
        const localDate = convertUtcToLocal(job.date);
        return { ...job, date: localDate };
      });

      setJobs(updatedJobs);
    };

    loadJobs();
  }, [setJobs]);

  return (
    <div className="job-list-page">
      {jobs ? <JobList jobs={jobs} /> : <p>Loading...</p>}
    </div>
  );
};

export default JobListPage;
