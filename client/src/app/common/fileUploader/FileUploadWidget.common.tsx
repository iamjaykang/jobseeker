import React, { useState } from "react";
import { Profile } from "../../models/profile.model";
import FilePreview from "./FilePreview.common";
import FileWidgetDropzone from "./FileWidgetDropzone.common";

interface Props {
  currentProfile: Profile;
}

const FileUploadWidget = ({ currentProfile }: Props) => {
  const [files, setFiles] = useState<any[]>([]);

  const handleDelete = (id: string) => {
    const newFiles = files.filter((file: any) => file.id !== id);
    setFiles(newFiles);
  };

  const handleSetFiles = (newFiles: any[]) => {
    if (currentProfile.documents!.length >= 2) {
      return;
    }
    setFiles(newFiles);
  };

  return (
    <div className="file-upload-widget">
      {files.length === 0 ? (
        <FileWidgetDropzone
          setFiles={handleSetFiles}
          currentProfile={currentProfile}
        />
      ) : (
        files.map((file) => (
          <FilePreview
            key={file.name}
            file={file}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default FileUploadWidget;
