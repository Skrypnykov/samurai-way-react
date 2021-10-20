import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import {
  Header,
  Navbar,
  Profile,
  Dialogs,
  News,
  Music,
  Settings,
} from "./Components";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route  path="/profile" 
               render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route  path="/dialogs" 
                render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route  path="/news" 
                render={() => <News />} />
        <Route path="/music" 
                render={() => <Music />} />
        <Route path="/settings" 
                render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
