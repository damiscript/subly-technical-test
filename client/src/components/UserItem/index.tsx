import React from "react";
import { User } from "../../types";

interface UserItemProps {
  index: Number;
  user: User;
}
const UserItem = (props: UserItemProps) => {
  return (
    <tr className="user-item">
      <td className="index">{props.index}</td>
      <td className="firstName">{props.user.name}</td>
      <td className="countryOfOrigin">{props.user.country_of_origin}</td>
    </tr>
  );
};

export default UserItem;
