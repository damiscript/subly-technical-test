import React, { useEffect, useState } from "react";
import { File } from "../../../types/index";
import FileItem from "../../FileItem";
import { fetchFiles } from "../../../actions";

const FileList: React.FC = () => {
  const [File, setFiles] = useState([]);
  useEffect(() => {
    const requestFiles = async () => {
      const File: any = await fetchFiles();
      setFiles(File);
    };
    requestFiles();
  }, []);

  const renderFiles = File.map((file: File, index) => {
    return <FileItem key={file.file_id} file={file} index={index + 1} />;
  });

  return (
    <div className="file-list container">
      <h2 className="text-2xl">Files</h2>
      {renderFiles}
    </div>
  );
};
export default FileList;
