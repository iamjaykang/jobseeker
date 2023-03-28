import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom/";
import LoadingSpinner from "../../../app/common/loadingSpinner/LoadingSpinner.common";
import {
  deleteJobLoading,
  fetchJobByIdLoading,
} from "../../../app/stores/jobPosts/job.action";
import {
  selectJob,
  selectJobsIsLoading,
} from "../../../app/stores/jobPosts/job.selector";
import "./jobDetails.styles.css";
import JobDetailsCard from "./JobDetailsCard.component";

const JobDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const job = useSelector(selectJob);

  const jobIsLoading = useSelector(selectJobsIsLoading);

  const handleDelete = () => {
    if (job && job.id) {
      dispatch(deleteJobLoading(job.id));
      navigate("/browse-jobs");
    }
  };

  useEffect(() => {
    if (id) dispatch(fetchJobByIdLoading(id));
  }, [id, dispatch]);

  if (jobIsLoading) return <LoadingSpinner />;

  return (
    <div className="job-details-page">
      <div className="job-details__card-container">
        {job && (
          <>
            <div className="job-details__action-container">
              <Link
                to={`/manage/${job.id}`}
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
            <JobDetailsCard job={job} />
          </>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
