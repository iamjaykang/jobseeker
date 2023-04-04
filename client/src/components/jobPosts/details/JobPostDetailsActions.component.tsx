import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/";
import { JobPost } from "../../../app/models/jobPost.model";
import { selectUser } from "../../../app/stores/users/user.selector";

interface Props {
  jobPost: JobPost;
}

const JobPostDetailsActions = ({ jobPost }: Props) => {
  const currentUser = useSelector(selectUser);
  const isLoggedIn = currentUser !== null && currentUser !== undefined;
  const [errorMessage, setErrorMessage] = useState("");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setErrorMessage("Please log in to apply for the job.");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <>
      <div className="job-details-actions">
        <div className="job-details-actions__buttons">
          <Link
            to={`/job/${jobPost.id}/apply/${currentUser?.username}`}
            className="job-details-actions__apply"
            onClick={handleLinkClick}
          >
            Apply
          </Link>
          <button className="job-details-actions__save">Save Job</button>
        </div>
        <p className="job-details-actions__applicants">
          Number of Applicants: {jobPost?.numberOfApplicants}
        </p>
      </div>
      {errorMessage && (
        <p className="job-details-actions__error">{errorMessage}</p>
      )}
    </>
  );
};

export default JobPostDetailsActions;
