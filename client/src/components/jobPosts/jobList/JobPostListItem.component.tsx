import React from "react";
import { Link } from "react-router-dom/";
import { JobPost } from "../../../app/models/jobPost.model";

interface Props {
  jobPost: JobPost;
}

const JobPostListItem = ({ jobPost }: Props) => {
  return (
    <>
      <li className="job-list__item">
        <Link to={`/browse-jobs/${jobPost.id}`}>
          <h2 className="job-list__title">{jobPost.title}</h2>
        </Link>
        <p className="job-list__date">Posted On: {jobPost.date}</p>
        <p className="job-list__posted-by">Posted By: {jobPost.poster.username}</p>
        <p className="job-list__location">{jobPost.city}</p>
        <p className="job-list__salary">Salary: {jobPost.salary}</p>
        <p className="job-list__type">Job Type: {jobPost.jobType}</p>
        <p className="job-list__description">{jobPost.description}</p>
        <p className="job-list__level">
          Experience Level: {jobPost.experienceLevel}
        </p>
      </li>
    </>
  );
};

export default JobPostListItem;
