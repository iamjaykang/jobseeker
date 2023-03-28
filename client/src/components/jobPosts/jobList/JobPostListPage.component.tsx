import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../app/common/loadingSpinner/LoadingSpinner.common";
import { JobPost } from "../../../app/models/jobPost.model";
import { fetchAllJobPostsLoading } from "../../../app/stores/jobPosts/jobPosts.action";
import {
  selectJobPostsArray,
  selectJobPostsIsLoading,
} from "../../../app/stores/jobPosts/jobPosts.selector";
import JobPostList from "./JobPostList.component";
import "./jobPostListPage.styles.css";

const JobPostListPage = () => {
  const dispatch = useDispatch();

  const jobPosts = useSelector(selectJobPostsArray) as JobPost[];

  const jobPostsIsLoading = useSelector(selectJobPostsIsLoading);

  useEffect(() => {
    dispatch(fetchAllJobPostsLoading());
  }, [dispatch]);

  if (jobPostsIsLoading) return <LoadingSpinner />;

  return <div className="job-list-page">{jobPosts && <JobPostList jobPosts={jobPosts} />}</div>;
};

export default JobPostListPage;
