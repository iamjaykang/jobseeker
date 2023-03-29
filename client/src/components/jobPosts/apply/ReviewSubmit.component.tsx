import React, { useState } from "react";
import { JobPost } from "../../../app/models/jobPost.model";
import { User } from "../../../app/models/user.model";

interface Props {
  jobPost: JobPost | null;
  currentUser: User;
  handlePreviousStep: () => void;
}

const ReviewSubmit = ({ jobPost, currentUser, handlePreviousStep }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDetailsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="review-submit-form">
      <div className="review-submit__header">
        <h2 className="review-submit__title">Review &amp; Submit</h2>
      </div>
      <div className="review-submit__content">
        <div className="review-submit__section">
          <h3 className="review-submit__section-title">Job Details</h3>
          <div className="review-submit__section-content">
            <h3 className="review-submit__content-title">{jobPost?.title}</h3>
            <button
              className="review-submit__collapsible"
              onClick={handleDetailsOpen}
            >
              Details
            </button>
            <div
              className={`review-submit__details-content${
                isOpen ? " open" : ""
              }`}
            >
              {jobPost?.description}
            </div>
          </div>
        </div>
        <div className="review-submit__section">
          <h3 className="review-submit__section-title">Application Details</h3>
          <div className="review-submit__section-content">
            <div className="review-submit__column">
              <h4 className="review-submit__column-title">Personal Info</h4>
              <p className="review-submit__text">
                {currentUser?.firstName} {currentUser?.lastName}
              </p>
              <p className="review-submit__text">{currentUser?.email}</p>
            </div>
            <div className="review-submit__column">
              <h4 className="review-submit__column-title">CV</h4>
              CV section
            </div>
            <div className="review-submit__column">
              <h4 className="review-submit__column-title">Cover Letter</h4>
              Cover letter section
            </div>
          </div>
        </div>
      </div>
      <div className="review-submit__footer">
        <button className="review-submit__button--previous" onClick={handlePreviousStep}>
          Previous Step
        </button>
        <button className="review-submit__button">Submit Application</button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
