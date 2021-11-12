const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {id: 1, followed: true, fullName: "Oleg S.", status: "I am looking for a Job right now...", location: {city: "Dobropillya", country: "Ukraine"} },
    // {id: 2, followed: false, fullName: "Svetlana D.", status: "I am so pretty", location: {city: "Minsk", country: "Belarus"} },
    // {id: 3, followed: true, fullName: "Sergei S.", status: "I like football!!!", location: {city: "Kyiv", country: "Ukraine"} },
    // {id: 4, followed: false, fullName: "Andrew T.", status: "I am free to help to create good Video Production", location: {city: "Tallahassee", country: "United States"} },
    // {id: 5, followed: true, fullName: "Iryna S.", status: "I am a boss", location: {city: "Lviv", country: "Ukraine"} },
    // {id: 6, followed: true, fullName: "Victoria N.", status: "I am so pretty", location: {city: "Odessa", country: "Ukraine"} },
    // {id: 7, followed: false, fullName: "Maxim U.", status: "I like football!!!", location: {city: "Ankara", country: "Turkey"} },
    // {id: 8, followed: true, fullName: "Denys B.", status: "I am a boos too", location: {city: "Munchen", country: "Germany"} }
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map( callbackfn: u => {
          if (u.id === action.userId) {
              return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( callbackfn: u => {
          if (u.id === action.userId) {
              return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [ ...state.users, ...action.users]}
    };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const  setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;