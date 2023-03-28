import React from "react";
import { JobPost } from "../../../app/models/jobPost.model";
import JobPostDetailsActions from "./JobPostDetailsActions.component";

interface Props {
  jobPost: JobPost;
}

const JobPostDetailsCard = ({ jobPost }: Props) => {
  return (
    <div className="job-details-card">
      <div className="job-details-card__header">
        <h2 className="job-details-card__title">{jobPost?.title}</h2>
      </div>
      <div className="job-details-card__info">
        <p className="job-details-card__date">Posted On: {jobPost?.date}</p>
        <p className="job-details-card__posted-by">
          Posted By: {jobPost?.poster.username}
        </p>
        <p className="job-details-card__location">{jobPost?.city}</p>
        <p className="job-details-card__salary">Salary: {jobPost?.salary}</p>
        <p className="job-details-card__type">Job Type: {jobPost?.jobType}</p>
        <p className="job-details-card__level">
          Experience Level: {jobPost?.experienceLevel}
        </p>
      </div>
        <JobPostDetailsActions jobPost={jobPost} />
      <div className="job-details-card__description">
        <p>{jobPost?.description}</p>
      </div>
    </div>
  );
};

export default JobPostDetailsCard;
