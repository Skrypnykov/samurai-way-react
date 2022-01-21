import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { withRouter } from 'react-router';
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import store from "./Redux/redux-store";
import { initializeApp } from "./Redux/app-reducer";
import "./App.css";
import { LoginPage, HeaderContainer, Navbar, News, Music, Settings } from "./Components";
import Preloader from "./Components/Common/Preloader/Preloader";
import { withSuspense } from "./Hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?"
            render={withSuspense(ProfileContainer)} />
          <Route path="/dialogs"
            render={withSuspense(DialogsContainer)} />
          <Route path="/users"
            render={withSuspense(UsersContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;
