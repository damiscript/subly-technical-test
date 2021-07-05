import React from "react";
import AvgFileDuration from "../Reports/AvgFileDuration";
import AvgFileSize from "../Reports/AvgFileSize";
import FilesPerUser from "../Reports/FilesPerUser";
import FilesPerType from "../Reports/FilesPerType";
const Dashboard = () => {
  return (
    <div className="dashboard container">
      <h1 className="text-center text-2xl font-bold mb-4">Dashboard</h1>
      <FilesPerType />
      <FilesPerUser />
      <AvgFileSize />
      <AvgFileDuration />
    </div>
  );
};
export default Dashboard;
