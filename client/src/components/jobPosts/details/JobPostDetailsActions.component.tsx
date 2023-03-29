import React from "react";
import { Link } from "react-router-dom/";
import { JobPost } from "../../../app/models/jobPost.model";

interface Props {
  jobPost: JobPost;
}

const JobPostDetailsActions = ({ jobPost }: Props) => {
  return (
    <div className="job-details-actions">
      <div className="job-details-actions__buttons">
        <Link to={`/job/${jobPost.id}/apply`} className="job-details-actions__apply">Apply</Link>
        <button className="job-details-actions__save">Save Job</button>
      </div>
      <p className="job-details-actions__applicants">
        Number of Applicants: {jobPost?.numberOfApplicants}
      </p>
    </div>
  );
};

export default JobPostDetailsActions;
