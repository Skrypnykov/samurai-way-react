import ava1 from "../Assets/avatar-icon-png.png";
import ava2 from "../Assets/avatar-friend.png";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
              return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
              return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [ ...state.users, ...action.users]}
    }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const  setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;