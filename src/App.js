import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
