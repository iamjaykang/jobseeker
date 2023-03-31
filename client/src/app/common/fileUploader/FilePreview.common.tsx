import React from "react";
import { formatSize } from "../../utils/formatFileSize.util";

interface Props {
  file: any;
  handleDelete: (id: string) => void;
}

const FilePreview = ({ file, handleDelete }: Props) => {
  return (
    <div className="file-upload-widget__file" key={file.name}>
      <div>
        <p className="file-upload-widget__name">{file.name}</p>
        <p className="file-upload-widget__size">{formatSize(file.size)}</p>
      </div>
      {file.preview && (
        <div className="file-upload-widget__preview">
          <a
            className="file-upload-widget__view"
            href={file.preview}
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
        </div>
      )}
      <button
        className="file-upload-widget__delete"
        onClick={() => handleDelete(file.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default FilePreview;
