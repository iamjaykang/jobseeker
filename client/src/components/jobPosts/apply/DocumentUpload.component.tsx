import React, { useState } from "react";
import { JobPost } from "../../../app/models/jobPost.model";
import { User } from "../../../app/models/user.model";

interface Props {
  jobPost: JobPost | null;
  currentUser: User;
  handleNextStep: () => void;
}

const DocumentUpload = ({ jobPost, currentUser, handleNextStep }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDetailsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="document-upload-form">
      <div className="document-upload__column">
        <div className="document-upload__row">
          <div className="document-upload__user-info">
            <h2 className="document-upload__header">User Info</h2>
            <p className="document-upload__text">
              {currentUser?.firstName} {currentUser?.lastName}
            </p>
            <p className="document-upload__text">{currentUser?.email}</p>
          </div>
        </div>
        <div className="document-upload__row">
          <div className="document-upload__cv-upload">
            <h2 className="document-upload__header">Upload CV</h2>
            file input
          </div>
        </div>
        <div className="document-upload__row">
          <div className="document-upload__cover-letter-upload">
            <h2 className="document-upload__header">Upload Cover Letter</h2>
            file input
          </div>
        </div>
      </div>
      <div className="document-upload__column">
        <div className="document-upload__row">
          <div className="document-upload__job-description">
            <h2 className="document-upload__header">Job Description</h2>
            <div className="document-upload__job-details">
              <h3 className="document-upload__subheader">{jobPost?.title}</h3>
              <button
                className="document-upload__collapsible"
                onClick={handleDetailsOpen}
              >
                Details
              </button>
              <div
                className={`document-upload__details-content${
                  isOpen ? " open" : ""
                }`}
              >
                {jobPost?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="job-apply-button" onClick={handleNextStep}>
        Next Step
      </button>
    </div>
  );
};

export default DocumentUpload;
