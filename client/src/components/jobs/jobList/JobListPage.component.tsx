import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobsLoading } from "../../../app/stores/jobs/job.action";
import { selectJobsArray } from "../../../app/stores/jobs/job.selector";
import JobList from "./JobList.component";
import "./jobListPage.styles.css";

const JobListPage = () => {
  const dispatch = useDispatch();

  const jobs = useSelector(selectJobsArray);

  useEffect(() => {
    dispatch(fetchAllJobsLoading());
  }, [dispatch]);

  return (
    <div className="job-list-page">
      {jobs ? <JobList jobs={jobs} /> : <p>Loading...</p>}
    </div>
  );
};

export default JobListPage;
