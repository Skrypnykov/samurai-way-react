import React from "react";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from "./Profile";

class ProfileContainer extends React.Component {

  componentDidMount () {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 20951
    }
    this.props.getUserProfile(userId);
  }

  render () {
    if (!this.props.isAuth) return <Redirect to='/login' />

    return (
      <Profile {...this.props} profile={this.props.profile} />  
    )
  };
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);