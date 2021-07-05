import React, { useEffect, useState } from "react";
import Loader from "../../Loader";
import UserItem from "../../UserItem";
import { User } from "../../../types/index";
import { fetchUsers } from "../../../actions";

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);
  //Fetch all users from DB on first load
  useEffect(() => {
    const requestUsers = async () => {
      const users: any = await fetchUsers();
      if (users === 500) {
        return;
      }
      setUsers(users);
    };
    requestUsers();
  }, []);
  if (!users) {
    return <Loader />;
  }
  const renderUsers = users.map((user: User, index) => {
    return <UserItem key={user.user_id} user={user} index={index + 1} />;
  });
  return (
    <div className="user-list container">
      <h2 className="text-2xl mb-4">Users</h2>
      <h3 className="text-2xl mb-4">The number of users are {users.length}</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{renderUsers}</tbody>
      </table>
    </div>
  );
};
export default UserList;
