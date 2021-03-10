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
          <Route
            path="/profile"
            render={() => <Profile postsData={props.postsData} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.dialogsData}
                messagesData={props.messagesData}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
