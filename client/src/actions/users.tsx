import server from "../api/server";

export const createUser = async (user: any) => {
  await server.post("/users", user).catch(err => {
    console.error(err);
    return null;
  });
};

export const fetchUsers = async () => {
  const response: any = await server.get("/users").catch(err => {
    console.error(err);
    return null;
  });
  return response.data !== null ? response.data : null;
};
