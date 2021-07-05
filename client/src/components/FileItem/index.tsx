import React from "react";
import { File } from "../../types";

interface FileItemProps {
  index: Number;
  file: File;
}
const FileItem = (props: FileItemProps) => {
  return (
    <div className="file-item grid grid-cols-6 text-left space-x-4">
      <div className="index">{props.index}</div>
      <div className="file-name">{props.file.name}</div>
      <div className="file-uuid">{props.file.uuid}</div>
      <div className="file-type">.{props.file.type}</div>
      <div className="file-duration">{props.file.duration} (s)</div>
      <div className="file-size">{props.file.size} (bytes)</div>
    </div>
  );
};

export default FileItem;
