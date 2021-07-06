import { useEffect, useState } from "react";
import { fetchFilesPerUser } from "../../../actions/reports";
import Loader from "../../Loader";
import Card from "../../Card";
import ReportList from "../../ReportList";

const FilesPerUser = () => {
  const [filesPerUser, setFilesPerUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const requestFilesPerUser = async () => {
      const result = await fetchFilesPerUser();
      setFilesPerUser(result);
      setFetching(false);
    };
    requestFilesPerUser();
  }, []);
  if (fetching) {
    return <Loader />;
  }
  return (
    <div className="files-per-user flex space-x-4">
      <Card
        header="File Uploads Per User"
        body={<ReportList items={filesPerUser} keys={["name", "count"]} />}
      />
    </div>
  );
};
export default FilesPerUser;
