import { profileAPI } from '../Api/Api';

import ava1 from "../Assets/a1.png";
import ava2 from "../Assets/a2.png";
import ava3 from "../Assets/a3.png";
import avaDefault from "../Assets/a4.png";
//import { savePhoto } from './profile-reducer';

const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_STATUS = "samurai-network/profile/SET_STATUS";
const DELETE_POST = "samurai-network/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "samurai-network/profile/photo/SAVE_PHOTO_SUCCESS";

let initialState = {
  postsData: [
    { id: 1, avatar: ava1, message: "Hey, why nobody love me?", like: 11, dislike: 0 },
    { id: 2, avatar: ava2, message: "It's our new program! Hey!", like: 9, dislike: 1 },
    { id: 3, avatar: ava3, message: "Hi, It's my first post!", like: 21, dislike: 2 }
  ],
  profile: null,
  status: ""
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 4, avatar: avaDefault, message: action.newPostText, like: 0, dislike: 0 };
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
      return { ...state, profile: action.profile };
    }
    case DELETE_POST: {
      return { ...state, posts: state.postsData.filter(p => p.id !== action.postId) }
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: {...state.profile, photos: action.photos} }
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

// Redux Thunk 
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export default profileReducer;