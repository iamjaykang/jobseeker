import React from "react";
import { Job } from "../../../app/models/job.model";

interface Props {
  job: Job;
}

const JobDetailsCard = ({ job }: Props) => {
  return (
    <div className="job-details-card">
      <div className="job-details-card__content">
        <h2 className="job-details-card__title">{job?.title}</h2>
        <p className="job-details-card__description">{job?.description}</p>
        <p className="job-details-card__location">{job?.city}</p>
        <p className="job-details-card__salary">Salary: {job?.salary}</p>
        <p className="job-details-card__type">Job Type: {job?.jobType}</p>
        <p className="job-details-card__level">
          Experience Level: {job?.experienceLevel}
        </p>
        <p className="job-details-card__posted-by">
          Posted By: {job?.postedBy}
        </p>
        <p className="job-details-card__date">Posted On: {job?.date}</p>
      </div>
    </div>
  );
};

export default JobDetailsCard;
