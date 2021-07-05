import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ setFile }) => {
  /**
   * Gets the duration of a video file
   * @param {Object} file
   * @returns
   */
  const getVideoDuration = async file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const media = new Audio(reader.result);
        media.onloadedmetadata = () => resolve(media.duration);
      };
      reader.readAsDataURL(file);
      reader.onerror = error => reject(error);
    });
  /**
   * When an item is dropped in the drop zone
   */
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(async file => {
      const reader = new FileReader();
      const duration = await getVideoDuration(file);
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
      //The video file data to be sent back
      let fileData = {
        name: "",
        uuid: "",
        type: "",
        duration: 0,
        size: 0
      };
      fileData.name = file.name.split(".")[0]; //get only the file name
      fileData.uuid = 0;
      fileData.size = file.size;
      fileData.type = file.type.split("/")[1]; //the file extension
      fileData.duration = Math.round(duration);
      setFile(fileData);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="border bg-gray-200 py-16 text-center rounded border"
    >
      <input {...getInputProps()} />
      <p>Drag or click a file to upload it</p>
    </div>
  );
};
export default MyDropzone;
