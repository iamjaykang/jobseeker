import React, { useEffect, useState } from "react";
import DocumentUpload from "./DocumentUpload.component";
import ReviewSubmit from "./ReviewSubmit.component";
import "./jobPostApply.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectJobPost } from "../../../app/stores/jobPosts/jobPosts.selector";
import StepIndicator from "./StepIndicator.common";
import { fetchJobPostByIdLoading } from "../../../app/stores/jobPosts/jobPosts.action";
import { useParams } from "react-router-dom";
import {
  selectProfile,
  selectProfileIsLoading,
} from "../../../app/stores/profiles/profile.selector";
import { fetchProfileByUsernameLoading } from "../../../app/stores/profiles/profile.action";
import LoadingSpinner from "../../../app/common/loadingSpinner/LoadingSpinner.common";

const JobPostApply = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [coverLetter, setCoverLetter] = useState("");

  const [selectedDocument, setSelectedDocument] = useState("");

  const currentProfile = useSelector(selectProfile);

  const jobPost = useSelector(selectJobPost);

  const dispatch = useDispatch();

  const documentIsLoading = useSelector(selectProfileIsLoading);

  const { jobPostId } = useParams();

  const { username } = useParams();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCoverLetterChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCoverLetter(event.target.value);
  };

  useEffect(() => {
    if (!currentProfile) {
      dispatch(fetchProfileByUsernameLoading(username!));
    }
  }, [currentProfile]);

  useEffect(() => {
    if (jobPost === null) {
      dispatch(fetchJobPostByIdLoading(jobPostId!));
    }
  }, [jobPost]);

  if (documentIsLoading) return <LoadingSpinner />;

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
            currentProfile={currentProfile!}
            handleNextStep={handleNextStep}
            setSelectedDocument={setSelectedDocument}
            selectedDocument={selectedDocument}
            coverLetter={coverLetter}
            handleCoverLetterChange={handleCoverLetterChange}
          />
        </div>
      ) : (
        <div className="review-submit-container">
          <ReviewSubmit
            setCurrentStep={setCurrentStep}
            jobPost={jobPost}
            currentProfile={currentProfile!}
            selectedDocument={selectedDocument}
            coverLetter={coverLetter}
            handlePreviousStep={handlePreviousStep}
          />
        </div>
      )}
    </div>
  );
};

export default JobPostApply;
