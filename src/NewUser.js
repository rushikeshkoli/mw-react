import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";

function NewUser() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/add`, {
      'username': name,
      'desc': desc
    })
    console.log(res)
    setIsEditing(false)
    if(res.data.message === 'failure') {
      alert('user already present')
    } else {
      history.push(`/user/${res.data.user.userId}`)
    }
  }
  return (
    <div>
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Add User</button>
      ) : (
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
      )}
    </div>
  );
}

export default NewUser;
