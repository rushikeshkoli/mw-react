import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SearchUser from "./SearchUser";
import NewUser from "./NewUser";

import "./userList.css"

function UserList() {
  const [users, setUsers] = useState([]);
  const allUsers = users.map((user) => (
    <h3 key={user.userId} onClick={() => history.push(`/user/${user.userId}`)}>
      {user.username}
    </h3>
  ));
  let history = useHistory();
  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/hello`);
      console.log(res.data);
      setUsers(res.data.users);
      console.log(process.env.DOMAIN)
      // console.log(users);
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <SearchUser />
      <NewUser />
      <h2>UserList</h2>
      {allUsers}
    </div>
  );
}

export default UserList;
