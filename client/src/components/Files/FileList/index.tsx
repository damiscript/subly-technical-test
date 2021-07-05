import React, { useEffect, useState } from "react";
import { File } from "../../../types/index";
import FileItem from "../../FileItem";
import Loader from "../../Loader";
import { fetchFiles } from "../../../actions";

const FileList: React.FC = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const requestFiles = async () => {
      const files: any = await fetchFiles();
      if (files === 500) {
        return;
      }
      setFiles(files);
    };
    requestFiles();
  }, []);
  if (!files) {
    return <Loader />;
  }
  const renderFiles = files.map((file: File, index) => {
    return <FileItem key={file.file_id} file={file} index={index + 1} />;
  });

  return (
    <div className="file-list container">
      <h2 className="text-2xl mb-4">Files</h2>
      <h3 className="text-2xl mb-4">The number of files are {files.length}</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Type</th>
            <th>Duration (in seconds)</th>
            <th>Size (in Bytes)</th>
          </tr>
        </thead>
        <tbody>{renderFiles}</tbody>
      </table>
    </div>
  );
};
export default FileList;
