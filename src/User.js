import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function User() {
  let { userId } = useParams();
  let history = useHistory();
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(`http://localhost:8080/user/${userId}`);
      console.log(res);
      // setUsers(res.data.users)
    }
    fetchUser();
    setUser({ username: "rushi", desc: "dsds", img: "" });
    setName("rushi");
    setDesc("dsds");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // save data
    setIsEditing(!isEditing);
  };
  const removeUser = () => {
    //remove user
    history.push("/");
  };
  return (
    <div>
      <h2>User Profile</h2>
      <img src={user.img} />
      <h3>Name: {user.username}</h3>
      <p>Desc: {user.desc}</p>
      <div>
        {!isEditing ? (
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        ) : (
          <div>
            <form>
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                value={name}
              />
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                onChange={handleDescChange}
                value={desc}
              />

              <button onClick={handleSubmit}>Save</button>
            </form>
          </div>
        )}
      </div>
      <button onClick={removeUser}>Remove User</button>
    </div>
  );
}

export default User;
