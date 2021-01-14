import React, {useState} from "react";

function NewUser() {
  const [name, setName] = useState('')
  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  return (
    <div>
      <form>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" onChange={handleChange} value={name}/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default NewUser;
