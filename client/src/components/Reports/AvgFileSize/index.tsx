import { useEffect, useState } from "react";
import { fetchAverageFileSizePerUser } from "../../../actions/reports";
import Loader from "../../Loader";
import Card from "../../Card";
import ReportList from "../../ReportList";

const AvgFileSize = () => {
  const [avgFileSize, setAvgFileSize] = useState(null);
  const [avgFileSizePerUser, setAvgFileSizePerUser] = useState(null);
  useEffect(() => {
    const requestAvgFileSize = async () => {
      const result = await fetchAverageFileSizePerUser();
      setAvgFileSize(result.avgFileSize);
      setAvgFileSizePerUser(result.avgFileSizePerUser);
    };
    requestAvgFileSize();
  }, []);
  if (avgFileSize === null) {
    return <Loader />;
  }
  return (
    <div className="avg-file-size flex space-x-4">
      <Card
        header="Average size of all files
  "
        body={<ReportList items={avgFileSize} keys={["avg"]} />}
      />
      <Card
        header="Average size of all uploads and per user
"
        body={<ReportList items={avgFileSizePerUser} keys={["name", "avg"]} />}
      />
    </div>
  );
};
export default AvgFileSize;
