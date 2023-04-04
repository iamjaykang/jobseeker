import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { Profile } from "../../models/profile.model";
import { uploadDocumentLoading } from "../../stores/profiles/profile.action";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner.common";

interface Props {
  setFiles: (files: any) => void;
  currentProfile: Profile;
  uploading: boolean;
}

const FileWidgetDropzone = ({ setFiles, currentProfile, uploading }: Props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      if (currentProfile && currentProfile.documents!.length < 2) {
        setErrorMessage("");
        dispatch(
          uploadDocumentLoading(acceptedFiles[0], currentProfile.username)
        );
      } else {
        setErrorMessage("You can only upload up to 2 documents");
      }
    },
    [setFiles, currentProfile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    minSize: 0,
    maxSize: 2242880,
    multiple: false,
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {uploading ? (
        <LoadingSpinner />
      ) : (
        <>
          <p className="dropzone__text">
            Drag and drop files here, or click to select files
          </p>
          <p className="dropzone__text--info">
            Accepted file type: .pdf, Max file size: 2MB
          </p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default FileWidgetDropzone;
