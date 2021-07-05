import React from "react";
import { User } from "../../types";

interface UserItemProps {
  index: Number;
  user: User;
}
const UserItem = (props: UserItemProps) => {
  return (
    <div className="user-item grid grid-cols-3">
      <div className="index">{props.index}</div>
      <div className="firstName">{props.user.name}</div>
      <div className="countryOfOrigin">{props.user.country_of_origin}</div>
    </div>
  );
};

export default UserItem;
