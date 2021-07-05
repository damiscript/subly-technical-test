import server from "../api/server";
export const fetchFilesPerUser = async () => {
  const response: any = await server
    .get("/reports/files/all/user")
    .catch(err => {
      console.error(err);
      return null;
    });
  return response && "data" in response ? response.data : null;
};

export const fetchFilesPerType = async () => {
  const response: any = await server
    .get("/reports/files/all/type")
    .catch(err => {
      console.error(err);
      return null;
    });
  return response && "data" in response ? response.data : null;
};
export const fetchAverageFileSizePerUser = async () => {
  const response: any = await server
    .get("/reports/files/avg/size/user")
    .catch(err => {
      console.error(err);
      return null;
    });

  return response && "data" in response ? response.data : null;
};
export const fetchAverageFileDurationPerUser = async () => {
  const response: any = await server
    .get("/reports/files/avg/duration/user")
    .catch(err => {
      console.error(err);
      return null;
    });
  return response && "data" in response ? response.data : null;
};
