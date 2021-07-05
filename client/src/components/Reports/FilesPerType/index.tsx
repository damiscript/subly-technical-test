import { useEffect, useState } from "react";
import { fetchFilesPerType } from "../../../actions/reports";
import Loader from "../../Loader";
import Card from "../../Card";
import ReportList from "../../ReportList";

const FilesPerType = () => {
  const [filesPerType, setFilesPerType] = useState(null);
  useEffect(() => {
    const requestFilesPerType = async () => {
      const result = await fetchFilesPerType();
      setFilesPerType(result);
    };
    requestFilesPerType();
  }, []);
  if (filesPerType === null) {
    return <Loader />;
  }
  return (
    <div className="files-per-type flex space-x-4">
      <Card
        header="File Uploads Per Type"
        body={<ReportList items={filesPerType} keys={["type", "count"]} />}
      />
    </div>
  );
};
export default FilesPerType;
