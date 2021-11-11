import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import {
  Header,
  Navbar,
  Profile,
  DialogsContainer,
  News,
  Music,
  Users,
  Settings,
} from "./Components";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile"
          render={() => <Profile />} />
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/news"
          render={() => <News />} />
        <Route path="/music"
          render={() => <Music />} />
        <Route path="/users"
          render={() => <Users />} />
        <Route path="/settings"
          render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
