import server from "../api/server";
export const fetchUsers = async () => {
  const response: any = await server.get("/users").catch(err => {
    console.error(err);
    return null;
  });
  return response.data !== null ? response.data : null;
};
