import { useState, useEffect } from "react";
import MyDropzone from "../../Dropzone";
import Loader from "../../Loader";
import { createFile, fetchUsers } from "../../../actions";
const FileCreate = () => {
  const [userId, setUserId] = useState(0);
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState({
    file_id: -1,
    name: "",
    uuid: 0,
    type: "",
    duration: 0,
    size: 0
  });
  //Fetch all users from DB on first load
  useEffect(() => {
    const requestUsers = async () => {
      const users: any = await fetchUsers();
      if (users.length > 0) {
        console.log(users[0].user_id);
        setUserId(users[0].user_id);
      }
      setUsers(users);
    };
    requestUsers();
  }, []);

  /**Renders a list of users for the dropdown */
  const renderUsers = () => {
    return users.map((user: any) => {
      return (
        <option value={user.user_id} key={user.user_id}>
          {user.name}
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
        <h3 className="text-xl">Review File Data</h3>
        <ul>
          <li>Name : {file.name}</li>
          <li>UUID : {userId}</li>
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
          <label htmlFor="users">Select User:</label>
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
        {userId}
        <MyDropzone setFile={setFile} />
        <button
          onClick={e => {
            e.preventDefault();
            let fileData = file;
            fileData.uuid = userId;
            createFile(fileData);
          }}
        >
          Submit
        </button>
      </form>
      {renderFileData()}
    </div>
  );
};

export default FileCreate;
