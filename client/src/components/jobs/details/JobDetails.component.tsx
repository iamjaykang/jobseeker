import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchJobByIdLoading } from "../../../app/stores/jobs/job.action";
import { selectJob } from "../../../app/stores/jobs/job.selector";

const JobDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const job = useSelector(selectJob);

  useEffect(() => {
    if (id) dispatch(fetchJobByIdLoading(id));
  }, [id]);
  return (
    <div className="job-details-page">
      <h2 className="job-details__title">{job.title}</h2>
      <p className="job-details__description">{job.description}</p>
      <p className="job-details__location">{job.city}</p>
      <p className="job-details__salary">Salary: {job.salary}</p>
      <p className="job-details__type">Job Type: {job.jobType}</p>
      <p className="job-details__level">
        Experience Level: {job.experienceLevel}
      </p>
      <p className="job-details__posted-by">Posted By: {job.postedBy}</p>
      <p className="job-details__date">Posted On: {job.date}</p>
    </div>
  );
};

export default JobDetails;
