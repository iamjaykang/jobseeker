import React from "react";
import { JobPost } from "../../../app/models/jobPost.model";
import JobPostListItem from "./JobPostListItem.component";

interface Props {
  jobPosts: JobPost[];
}

const JobPostList = ({ jobPosts }: Props) => {
  return (
    <ul className="job-list">
      {jobPosts.map((jobPost) => (
        <JobPostListItem key={jobPost.id} jobPost={jobPost} />
      ))}
    </ul>
  );
};

export default JobPostList;
