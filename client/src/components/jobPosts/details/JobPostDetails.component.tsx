import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom/";
import LoadingSpinner from "../../../app/common/loadingSpinner/LoadingSpinner.common";
import {
  deleteJobPostLoading,
  fetchJobPostByIdLoading,
} from "../../../app/stores/jobPosts/jobPosts.action";
import {
  selectJobPost,
  selectJobPostsIsLoading,
} from "../../../app/stores/jobPosts/jobPosts.selector";
import "./jobPostDetails.styles.css";
import JobPostDetailsCard from "./JobPostDetailsCard.component";

const JobPostDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const jobPost = useSelector(selectJobPost);

  const jobIsLoading = useSelector(selectJobPostsIsLoading);

  const handleDelete = () => {
    if (jobPost && jobPost.id) {
      dispatch(deleteJobPostLoading(jobPost.id));
      navigate("/browse-jobs");
    }
  };

  useEffect(() => {
    if (id) dispatch(fetchJobPostByIdLoading(id));
  }, [id, dispatch]);

  if (jobIsLoading) return <LoadingSpinner />;

  return (
    <div className="job-details-page">
      <div className="job-details__card-container">
        {jobPost && (
          <>
            <div className="job-details__action-container">
              <Link
                to={`/manage/${jobPost.id}`}
                className="job-details__edit-button"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="job-details__delete-button"
              >
                Delete
              </button>
            </div>
            <JobPostDetailsCard jobPost={jobPost} />
          </>
        )}
      </div>
    </div>
  );
};

export default JobPostDetails;
