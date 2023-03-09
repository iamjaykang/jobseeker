import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import LoadingSpinner from "../../../app/common/loadingSpinner/LoadingSpinner.common";
import { fetchJobByIdLoading } from "../../../app/stores/jobs/job.action";
import {
  selectJob,
  selectJobsIsLoading,
} from "../../../app/stores/jobs/job.selector";
import "./jobDetails.styles.css";
import JobDetailsCard from "./JobDetailsCard.component";

const JobDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const job = useSelector(selectJob);

  const jobIsLoading = useSelector(selectJobsIsLoading);

  useEffect(() => {
    if (id) dispatch(fetchJobByIdLoading(id));
  }, [id, dispatch]);

  if (jobIsLoading) return <LoadingSpinner />;

  return (
    <div className="job-details-page">
      <JobDetailsCard job={job} />
    </div>
  );
};

export default JobDetails;
