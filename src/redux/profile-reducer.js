import { profileAPI } from './../Api/Api';

import ava1 from "../Assets/avatar-female.png";
import ava2 from "../Assets/avatar-friend.png";
import ava3 from "../Assets/avatar-of-nurse.png";
import avaDefault from "../Assets/avatar-cartoon-eyes-female.png";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const ADD_POST = "ADD-POST";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    {id: 1, avatar: ava1, message: "Hey, why nobody love me?", like: 11, dislike: 0},
    {id: 2, avatar: ava2, message: "It's our new program! Hey!", like: 9, dislike: 1},
    {id: 3, avatar: ava3, message: "Hi, It's my first post!", like: 21, dislike: 2}
  ],
  profile: null,
  status: ""
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {id: 4, avatar: avaDefault, message: action.newPostText, like: 0, dislike: 0};
      return {
        ...state,
        postsData: [...state.postsData, newPost]
      };
    }
    case SET_STATUS: {
      return { 
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// Redux Thunk 
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch (setUserProfile(response.data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch (setStatus(response.data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0 ) {
      dispatch (setStatus(status));
    }
  });
}

export default profileReducer;