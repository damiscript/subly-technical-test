import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import UserList from "./Users/UserList";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact component={UserList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
