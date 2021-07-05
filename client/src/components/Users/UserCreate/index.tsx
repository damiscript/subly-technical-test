import { useState } from "react";
import { createUser } from "../../../actions";
import { useHistory } from "react-router-dom";

import Button from "../../Button";
const UserCreate = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  return (
    <div className="user-create">
      <form className="flex flex-col space-y-2">
        <label>Name: </label>
        <input
          placeholder="Jane"
          className="w-full border rounded px-2"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <label>Country: </label>
        <input
          placeholder="Somewhere"
          className="w-full border rounded px-2"
          value={countryOfOrigin}
          onChange={e => {
            setCountryOfOrigin(e.target.value);
          }}
        />
        <Button
          disabled={name.trim() === "" || countryOfOrigin.trim() === ""}
          onClick={() => {
            let user = { user_id: -1, name, countryOfOrigin };
            createUser(user);
            history.push("/users");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default UserCreate;
