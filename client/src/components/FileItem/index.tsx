import React from "react";

interface FileItemProps {
  index: Number;
  file: any;
}
const FileItem = (props: FileItemProps) => {
  return (
    <tr className="file-item text-left space-x-4">
      <td className="index">{props.index}</td>
      <td className="file-name">{props.file.name}</td>
      <td className="file-uuid">{props.file.username}</td>
      <td className="file-type">.{props.file.type}</td>
      <td className="file-duration">{props.file.duration} (s)</td>
      <td className="file-size">{props.file.size} (bytes)</td>
    </tr>
  );
};

export default FileItem;
