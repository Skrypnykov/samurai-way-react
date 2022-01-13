import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from 'react-router';
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import store from "./Redux/redux-store";
import { initializeApp } from "./Redux/app-reducer";
import "./App.css";
import { LoginPage, HeaderContainer, Navbar, ProfileContainer, DialogsContainer, News, Music, UsersContainer, Settings } from "./Components";
import Preloader from "./Components/Common/Preloader/Preloader";

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
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;
