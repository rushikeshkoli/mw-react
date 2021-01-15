import React, { useState } from "react";

function NewUser() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false)
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
