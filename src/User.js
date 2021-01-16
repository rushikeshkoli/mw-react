import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function User() {
  let { userId } = useParams();
  let history = useHistory();
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  async function fetchUser() {
    const res = await axios.get(
      `${process.env.REACT_APP_DOMAIN}/user/${userId}`
    );
    console.log(res);
    const resUser = res.data.users;
    setUser({
      username: resUser.userName,
      desc: resUser.description,
      img: resUser.imageUrl,
    });
  }
  useEffect(() => {
    fetchUser();
    // setUser({ username: "rushi", desc: "dsds", img: "" });
    // setName("rushi");
  }, []);

  const startEdit = () => {
    setIsEditing(!isEditing);
    setDesc(user.desc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // save data
    const res = await axios.post(
      `${process.env.REACT_APP_DOMAIN}/user/update`,
      {
        username: userId,
        desc: desc,
      }
    );
    console.log(res);
    setIsEditing(!isEditing);
    fetchUser();
  };
  const removeUser = async () => {
    //remove user
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/remove`, {
      username: userId,
    });
    console.log(res);
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
          <button onClick={startEdit}>Edit</button>
        ) : (
          <div>
            <form>
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
