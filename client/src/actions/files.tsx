import server from "../api/server";
import { File } from "../types/index";

export const createFile = async (file: File) => {
  await server.post("/files", file).catch(err => {
    console.error(err);
    return null;
  });
};

export const fetchFiles = async () => {
  const response: any = await server.get("/files").catch(err => {
    console.error(err);
    return null;
  });
  return response.data !== null ? response.data : null;
};
