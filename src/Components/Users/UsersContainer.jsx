import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/users-reducer";

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
     dispatch(followAC(userId));
   },
   unfollow: (userId) => {
     dispatch(unFollowAC(userId));
   },
   setUsers: (users) => {
     dispatch(setUsersAC(users));
   },
   setCurrentPage: (pageNumber) => {
     dispatch(setCurrentPageAC(pageNumber));
   },
   setTotalUsersCount: (totalCount) => {
    dispatch(setUsersTotalCountAC(totalCount));
   }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);