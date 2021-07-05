import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import UserList from "./Users/UserList/index";
import FileCreate from "./Files/FileCreate";
import FileList from "./Files/FileList";
import Dashboard from "./Dashboard";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="mt-16">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/users" exact component={UserList} />
            <Route path="/files/add" exact component={FileCreate} />
            <Route path="/files" exact component={FileList} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
