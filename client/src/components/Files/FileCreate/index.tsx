import { useState, useEffect } from "react";
import MyDropzone from "../../Dropzone";
import Loader from "../../Loader";
import { createFile, fetchUsers } from "../../../actions";
const FileCreate = () => {
  const [userId, setUserId] = useState(0);
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState({
    name: "",
    uuid: "",
    type: "",
    duration: 0,
    size: 0
  });
  //Fetch all users from DB on first load
  useEffect(() => {
    const requestUsers = async () => {
      const users: any = await fetchUsers();
      setUsers(users);
      if (users.length > 0) {
        setUserId(users[0].id);
      }
    };
    requestUsers();
  }, []);

  /**Renders a list of users for the dropdown */
  const renderUsers = () => {
    return users.map((user: any) => {
      return (
        <option value={user.user_id} key={user.user_id}>
          {user.first_name}
        </option>
      );
    });
  };
  const renderFileData = () => {
    if (file.size === 0) {
      return;
    }
    if (!users) {
      return <Loader />;
    }
    return (
      <div className="file-data">
        <h3 className="text-xl">You have Uploaded!</h3>
        <ul>
          <li>Name : {file.name}</li>
          <li>UUID : {file.uuid}</li>
          <li>Type : {file.type}</li>
          <li>Duration : {file.duration}</li>
          <li>Size : {file.size}</li>
        </ul>
      </div>
    );
  };
  return (
    <div className="container file-create">
      <h2 className="text-2xl mb-4">Upload a File</h2>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="users">Select Users:</label>
          <select
            name="users"
            id="users"
            value={userId}
            onChange={e => {
              setUserId(parseInt(e.target.value));
            }}
          >
            {renderUsers()}
          </select>
        </div>
        <MyDropzone
          setFile={(file: any) => {
            setFile(file);
            file.uuid = userId;
            createFile(file);
          }}
        />
      </form>
      {renderFileData()}
    </div>
  );
};

export default FileCreate;
