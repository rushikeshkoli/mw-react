import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState(["a", "b", "c"]);
  const allUsers = users.map((user) => <h3 key={user}>{user}</h3>);
  return (
    <div>
      <h2>UserList</h2>
      {allUsers}
    </div>
  );
}

export default UserList;
