import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../app/common/loadingSpinner/LoadingSpinner.common";
import { Job } from "../../../app/models/job.model";
import { fetchAllJobsLoading } from "../../../app/stores/jobs/job.action";
import {
  selectJobsArray,
  selectJobsIsLoading,
} from "../../../app/stores/jobs/job.selector";
import JobList from "./JobList.component";
import "./jobListPage.styles.css";

const JobListPage = () => {
  const dispatch = useDispatch();

  const jobs = useSelector(selectJobsArray) as Job[];

  const jobsIsLoading = useSelector(selectJobsIsLoading);

  useEffect(() => {
    dispatch(fetchAllJobsLoading());
  }, [dispatch]);

  if (jobsIsLoading) return <LoadingSpinner />;

  return <div className="job-list-page">{jobs && <JobList jobs={jobs} />}</div>;
};

export default JobListPage;
