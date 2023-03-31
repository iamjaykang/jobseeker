import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/";
import { JobPost } from "../../../app/models/jobPost.model";
import { selectUser } from "../../../app/stores/users/user.selector";

interface Props {
  jobPost: JobPost;
}

const JobPostDetailsActions = ({ jobPost }: Props) => {
  const currentUser = useSelector(selectUser);
  return (
    <div className="job-details-actions">
      <div className="job-details-actions__buttons">
        <Link to={`/job/${jobPost.id}/apply/${currentUser.username}`} className="job-details-actions__apply">Apply</Link>
        <button className="job-details-actions__save">Save Job</button>
      </div>
      <p className="job-details-actions__applicants">
        Number of Applicants: {jobPost?.numberOfApplicants}
      </p>
    </div>
  );
};

export default JobPostDetailsActions;
