import React, { Dispatch, useState } from "react";
import { useSelector } from "react-redux";
import FileUploadWidget from "../../../app/common/fileUploader/FileUploadWidget.common";
import { JobPost } from "../../../app/models/jobPost.model";
import { Profile } from "../../../app/models/profile.model";
import { selectDocumentIsLoading } from "../../../app/stores/profiles/profile.selector";
import { selectUser } from "../../../app/stores/users/user.selector";
import SelectDocuments from "./SelectDocuments.component";

interface Props {
  jobPost: JobPost | null;
  currentProfile: Profile;
  coverLetter: string;
  setSelectedDocument: Dispatch<React.SetStateAction<string>>;
  selectedDocument: string;
  handleCoverLetterChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleNextStep: () => void;
}

const DocumentUpload = ({
  jobPost,
  currentProfile,
  handleNextStep,
  coverLetter,
  handleCoverLetterChange,
  selectedDocument,
  setSelectedDocument,
}: Props) => {
  const currentUser = useSelector(selectUser);

  const documentIsLoading = useSelector(selectDocumentIsLoading);

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
          </div>
        </div>
        <div className="document-upload__row">
          <div className="document-upload__cv-upload">
            <h2 className="document-upload__header">Upload CV</h2>
            <FileUploadWidget
              currentProfile={currentProfile}
              uploading={documentIsLoading}
            />
            <SelectDocuments
              currentProfile={currentProfile}
              selectedDocument={selectedDocument}
              setSelectedDocument={setSelectedDocument}
            />
          </div>
        </div>
        <div className="document-upload__row">
          <div className="document-upload__cover-letter-upload">
            <h2 className="document-upload__header">Upload Cover Letter</h2>
            <textarea
              className="document-upload__textarea"
              value={coverLetter}
              onChange={handleCoverLetterChange}
              placeholder="Introduce yourself and briefly explain why you are suitable for this role. Consider your relevant skills, qualifications and related experience."
            />
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
