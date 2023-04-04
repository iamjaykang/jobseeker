import React, { useState } from "react";
import { Profile } from "../../models/profile.model";
import FileWidgetDropzone from "./FileWidgetDropzone.common";

interface Props {
  currentProfile: Profile;
  uploading: boolean;
}

const FileUploadWidget = ({ currentProfile, uploading }: Props) => {
  const [files, setFiles] = useState<any[]>([]);

  const handleSetFiles = (newFiles: any[]) => {
    if (currentProfile.documents!.length >= 2) {
      return;
    }
    setFiles(newFiles);
  };

  return (
    <div className="file-upload-widget">
      <FileWidgetDropzone
        uploading={uploading}
        setFiles={handleSetFiles}
        currentProfile={currentProfile}
      />
    </div>
  );
};

export default FileUploadWidget;
