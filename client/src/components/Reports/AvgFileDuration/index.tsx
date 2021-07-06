import { useEffect, useState } from "react";
import { fetchAverageFileDurationPerUser } from "../../../actions/reports";
import Loader from "../../Loader";
import Card from "../../Card";
import ReportList from "../../ReportList";

const AvgFileDuration = () => {
  const [avgFileDuration, setAvgFileDuration] = useState(null);
  const [avgFileDurationPerUser, setAvgFileDurationPerUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const requestAvgFileDuration = async () => {
      const result = await fetchAverageFileDurationPerUser();
      setFetching(false);
      if (result) {
        setAvgFileDuration(result.avgFileDuration);
        setAvgFileDurationPerUser(result.avgFileDurationPerUser);
      }
    };
    requestAvgFileDuration();
  }, []);
  if (fetching) {
    return <Loader />;
  }
  return (
    <div className="avg-file-duration flex space-x-4">
      <Card
        header="Average duration of all files
  "
        body={<ReportList items={avgFileDuration} keys={["avg"]} />}
      />
      <Card
        header="Average duration of all uploads and per user
"
        body={
          <ReportList items={avgFileDurationPerUser} keys={["name", "avg"]} />
        }
      />
    </div>
  );
};
export default AvgFileDuration;
