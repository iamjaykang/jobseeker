import React, { useEffect, useState } from "react";
import { FaUser, FaPen, FaTrashAlt, FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProfileByUsernameLoading } from "../../app/stores/profiles/profile.action";
import { selectProfile } from "../../app/stores/profiles/profile.selector";
import "./profilePage.styles.css";

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  const dispatch = useDispatch();

  const profile = useSelector(selectProfile);
  const [selectedDocument, setSelectedDocument] = useState<string>("");

  const handleDeleteDocument = () => {
    // call API to delete selected document
    console.log(`delete ${selectedDocument}`);
  };

  const handleDownloadDocument = () => {
    // call API to download selected document
    console.log(`download ${selectedDocument}`);
  };

  useEffect(() => {
    username && dispatch(fetchProfileByUsernameLoading(username));
  }, [username]);

  const mainDocumentId = profile?.documents?.find(
    (document) => document.isMain
  )?.id;

  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <FaUser className="profile-page__avatar" />
        <h1 className="profile-page__username">{profile?.username}</h1>
        <button className="profile-page__edit-button">
          <FaPen />
        </button>
      </div>
      <div className="profile-page__body">
        <div className="profile-page__bio">
          {profile?.bio ? (
            <p>{profile.bio}</p>
          ) : (
            <p className="profile-page__placeholder-text">
              Add a bio to your profile
            </p>
          )}
        </div>
        <div className="profile-page__documents">
          <h2 className="profile-page__section-title">Resume</h2>
          <div className="profile-page__document-list">
            {profile && profile.documents!.length > 0 ? (
              <select
                className="profile-page__document-options"
                defaultValue={mainDocumentId}
                onChange={(e) => setSelectedDocument(e.target.value)}
              >
                {profile?.documents?.map((document) => (
                  <option key={document.id} value={document.id}>
                    {document.originalFileName}
                  </option>
                ))}
              </select>
            ) : (
              <p className="profile-page__placeholder-text">
                No documents available
              </p>
            )}
          </div>
          {selectedDocument && (
            <div className="profile-page__document-actions">
              <button
                onClick={handleDeleteDocument}
                className="profile-page__delete-button"
              >
                <FaTrashAlt />
              </button>
              <button
                onClick={handleDownloadDocument}
                className="profile-page__download-button"
              >
                <FaDownload />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
