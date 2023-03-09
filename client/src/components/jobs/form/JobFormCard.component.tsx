import React from "react";
import JobForm from "./JobForm.component";
import './jobForm.styles.css'

const JobFormCard = () => {
  return (
    <div className="job-form-card">
      <div className="job-form-card__header">Job Details</div>
      <div className="job-form-card__content">
        <JobForm />
      </div>
    </div>
  );
};

export default JobFormCard;
