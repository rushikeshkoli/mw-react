import React, { useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function SearchUser() {
  let history = useHistory()
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/search`, {
      'username': name
    })
    console.log(res)
  };

  return (
    <div>
      <form>
        <input type="text" id="username" onChange={handleChange} value={name} />

        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default SearchUser;
