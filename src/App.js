import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Provider, connect } from 'react-redux'
import { compose } from 'redux'
import store from './Redux/redux-store'
import { initializeApp } from './Redux/app-reducer'
import './App.css'
import {
  LoginPage,
  HeaderContainer,
  Navbar,
  News,
  Music,
  Settings,
} from './Components'
import Preloader from './Components/Common/Preloader/Preloader'
import { withSuspense } from './Hoc/withSuspense'

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured");
    // console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
          <Switch>
            <Route exact path="/"
              render={() => <Redirect to={"/profile"} />} />
            <Route path="/login"
              render={() => <LoginPage />} />
            <Route path="/profile/:userId?"
              render={withSuspense(ProfileContainer)} />
            <Route path="/dialogs"
              render={withSuspense(DialogsContainer)} />
            <Route path="/users"
              render={withSuspense(UsersContainer)} />
            <Route path="/news"
              render={() => <News />} />
            <Route path="/music"
              render={() => <Music />} />
            <Route path="/settings"
              render={() => <Settings />} />
            <Route path="*"
              render={() => <div className="pageNotFound"><p>404 NOT FOUND</p></div>} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App)

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp
