import React, { useEffect, useState } from "react";
import UserItem from "../../UserItem";
import { User } from "../../../types/index";
import { fetchUsers } from "../../../actions";

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);
  //Fetch all users from DB on first load
  useEffect(() => {
    const requestUsers = async () => {
      const users: any = await fetchUsers();
      setUsers(users);
    };
    requestUsers();
  }, []);

  const renderUsers = users.map((user: User, index) => {
    return <UserItem key={user.user_id} user={user} index={index + 1} />;
  });

  return (
    <div className="user-list container">
      <h2 className="text-2xl">Users</h2>
      {renderUsers}
    </div>
  );
};
export default UserList;
