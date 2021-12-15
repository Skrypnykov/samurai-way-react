import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import {
  LoginPage,
  HeaderContainer,
  Navbar,
  ProfileContainer,
  DialogsContainer,
  News,
  Music,
  UsersContainer,
  Settings,
} from "./Components";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <LoginPage />} />
      </div>
    </div>
  );
};

export default App;
