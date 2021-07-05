import React from "react";
import { User } from "../../types";

interface UserItemProps {
  index: Number;
  user: User;
}
const UserItem = (props: UserItemProps) => {
  return (
    <div className="user-item flex justify-between space-x-2 py-2">
      <div className="index w-1/4">{props.index}</div>
      <div className="firstName w-1/4">{props.user.first_name}</div>
      <div className="lastName w-1/4">{props.user.last_name}</div>
      <div className="countryOfOrigin w-1/4">
        {props.user.country_of_origin}
      </div>
    </div>
  );
};

export default UserItem;
