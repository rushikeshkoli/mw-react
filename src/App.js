import React from "react";
import "./App.css";
import UserList from "./UserList";
import User from "./User";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <UserList />
    // </div>
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route exact path="/user/:userId">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
