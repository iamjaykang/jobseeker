import React, { useState } from "react";
import DocumentUpload from "./DocumentUpload.component";
import ReviewSubmit from "./ReviewSubmit.component";
import "./jobPostApply.styles.css";
import { useSelector } from "react-redux";
import { selectJobPost } from "../../../app/stores/jobPosts/jobPosts.selector";
import { selectUser } from "../../../app/stores/users/user.selector";
import StepIndicator from "./StepIndicator.common";

const JobPostApply = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const currentUser = useSelector(selectUser);

  const jobPost = useSelector(selectJobPost);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="job-apply-page">
      <div className="step-indicator-container">
        <StepIndicator
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <div className="job-poster-info">
          <h2>{jobPost?.poster.username}</h2>
        </div>
      </div>
      {currentStep === 1 ? (
        <div className="document-upload-container">
          <DocumentUpload
            jobPost={jobPost}
            currentUser={currentUser}
            handleNextStep={handleNextStep}
          />
        </div>
      ) : (
        <div className="review-submit-container">
          <ReviewSubmit
            jobPost={jobPost}
            currentUser={currentUser}
            handlePreviousStep={handlePreviousStep}
          />
        </div>
      )}
    </div>
  );
};

export default JobPostApply;
