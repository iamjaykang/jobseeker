import React from "react";
import { Link } from "react-router-dom/";
import { Job } from "../../../app/models/job.model";

interface Props {
  job: Job;
}

const JobListItem = ({ job }: Props) => {
  return (
    <>
      <li className="job-list__item">
        <Link to={`/browse-jobs/${job.id}`}>
          <h2 className="job-list__title">{job.title}</h2>
        </Link>
        <p className="job-list__date">Posted On: {job.date}</p>
        <p className="job-list__posted-by">Posted By: {job.postedBy}</p>
        <p className="job-list__location">{job.city}</p>
        <p className="job-list__salary">Salary: {job.salary}</p>
        <p className="job-list__type">Job Type: {job.jobType}</p>
        <p className="job-list__description">{job.description}</p>
        <p className="job-list__level">
          Experience Level: {job.experienceLevel}
        </p>
      </li>
    </>
  );
};

export default JobListItem;
