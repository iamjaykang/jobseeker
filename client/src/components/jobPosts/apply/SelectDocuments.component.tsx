import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaDownload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Profile } from "../../../app/models/profile.model";
import { deleteDocumentLoading } from "../../../app/stores/profiles/profile.action";

interface Props {
  currentProfile: Profile;
}

const SelectDocuments = ({ currentProfile }: Props) => {
  const [selectedDocument, setSelectedDocument] = useState<string>("");

  const dispatch = useDispatch();

  const handleDeleteDocument = () => {
    dispatch(deleteDocumentLoading(selectedDocument, currentProfile.username));
  };

  const selectedDoc = currentProfile?.documents?.find(
    (document) => document.id === selectedDocument
  );

  useEffect(() => {
    const mainDocumentId = currentProfile?.documents?.find(
      (document) => document.isMain
    )?.id;
    setSelectedDocument(mainDocumentId || "");
  }, [currentProfile]);

  useEffect(() => {
    setSelectedDocument(currentProfile?.documents?.[0]?.id || "");
  }, [currentProfile?.documents]);

  return (
    <div className="existing-documents">
      <div className="existing-documents__header">
        <label
          className="existing-documents__label"
          htmlFor="existing-documents__select"
        >
          Select a CV
        </label>
        <div className="profile-page__document-actions">
          <button
            onClick={handleDeleteDocument}
            className="profile-page__delete-button"
          >
            <FaTrashAlt />
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            href={selectedDoc?.url}
            className="profile-page__download-button"
          >
            <FaDownload />
          </a>
        </div>
      </div>
      <select
        defaultValue={selectedDocument}
        className="existing-documents__select"
        onChange={(e) => setSelectedDocument(e.target.value)}
      >
        {currentProfile.documents!.map((document) => (
          <option key={document.id} value={document.id}>
            {document.originalFileName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDocuments;
