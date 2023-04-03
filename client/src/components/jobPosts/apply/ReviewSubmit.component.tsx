import React, { Dispatch, SetStateAction, useState } from "react";
import { JobPost } from "../../../app/models/jobPost.model";
import { Profile } from "../../../app/models/profile.model";

interface Props {
  jobPost: JobPost | null;
  currentProfile: Profile;
  selectedDocument: string;
  coverLetter: string;
  handlePreviousStep: () => void;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const ReviewSubmit = ({
  jobPost,
  currentProfile,
  handlePreviousStep,
  selectedDocument,
  coverLetter,
  setCurrentStep,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const document = currentProfile.documents!.find(
    (doc) => doc.id === selectedDocument
  );

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
                {currentProfile?.firstName} {currentProfile?.lastName}
              </p>
            </div>
            <div className="review-submit__column">
              <div className="review-submit__column-header">
                <h4 className="review-submit__column-title">
                  Documents Included
                </h4>
                <button
                  className="review-submit__edit-button"
                  onClick={() => setCurrentStep(1)}
                >
                  Edit
                </button>
              </div>
              {document && (
                <div className="review-submit__document-info">
                  <p className="review-submit__text">
                    {document.originalFileName}
                  </p>
                  {coverLetter ? (
                    <p className="review-submit__text">Cover Letter Included</p>
                  ) : (
                    <p className="review-submit__text">
                      No Cover Letter Included
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="review-submit__footer">
        <button
          className="review-submit__button--previous"
          onClick={handlePreviousStep}
        >
          Previous Step
        </button>
        <button className="review-submit__button">Submit Application</button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
