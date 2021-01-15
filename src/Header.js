import React from 'react'
import {Link} from 'react-router-dom'
import SearchUser from "./SearchUser";

import NewUser from "./NewUser";

function Header() {

  return (
    <div>
      <Link to='/'>Home</Link>
      <SearchUser />
      <NewUser />
    </div>
  )
}

export default Header;