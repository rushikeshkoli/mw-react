import "./App.css";
import UserList from "./UserList";
import User from "./User";
import NewUser from "./NewUser";
import SearchUser from './SearchUser'

function App() {
  return (
    <div className="App">
      <h2>Hello world</h2>
      <UserList />
      <User />
      <NewUser />
      <SearchUser />
    </div>
  );
}

export default App;
