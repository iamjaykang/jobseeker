import React from "react";
import { Job } from "../../../app/models/job.model";
import JobListItem from "./JobListItem.component";

interface Props {
  jobs: Job[];
}

const JobList = ({ jobs }: Props) => {
  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobList;
