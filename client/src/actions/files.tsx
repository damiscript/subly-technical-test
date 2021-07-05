import { File } from "@babel/types";
import server from "../api/server";

export const createFile = async (file: File) => {
  await server.post("/files", file).catch(err => {
    console.error(err);
    return null;
  });
};
