import React from "react";
import { JobPost } from "../../../app/models/jobPost.model";
import { User } from "../../../app/models/user.model";

interface Props {
  jobPost: JobPost | null;
  currentUser: User;
  handlePreviousStep: () => void;
}

const ReviewSubmit = ({ jobPost, currentUser, handlePreviousStep }: Props) => {
  return (
    <div className="review-submit">
      <div className="review-submit__header">
        <h2 className="review-submit__title">Review &amp; Submit</h2>
      </div>
      <div className="review-submit__content">
        <div className="review-submit__section">
          <h3 className="review-submit__section-title">Job Details</h3>
          <div className="review-submit__section-content">
            job details
          </div>
        </div>
        <div className="review-submit__section">
          <h3 className="review-submit__section-title">Application Details</h3>
          <div className="review-submit__section-content">
            <div className="review-submit__column">
              <h4 className="review-submit__column-title">Personal Info</h4>
              Current user info
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
        <button className="review-submit__button">Submit Application</button>
        <button className="job-apply-button" onClick={handlePreviousStep}>Previous Step</button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
