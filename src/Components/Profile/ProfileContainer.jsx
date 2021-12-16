import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
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
    return (
      <Profile {...this.props} profile={this.props.profile} />  
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);