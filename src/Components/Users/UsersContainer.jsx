import Users from "./Users";
import { connect } from "react-redux";
import { followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
   follow: (userId) => {
     dispatch(followActionCreator(userId));
   },
   unfollow: (userId) => {
     dispatch(unFollowActionCreator(userId));
   },
   setUsers: (users) => {
     dispatch(setUsersActionCreator(users));
   },
   setCurrentPage: (pageNumber) => {
     dispatch(setCurrentPageActionCreator(pageNumber));
   }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);