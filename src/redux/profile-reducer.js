import ava1 from "../Assets/avatar-female.png";
import ava2 from "../Assets/avatar-friend.png";
import ava3 from "../Assets/avatar-of-nurse.png";
import avaDefault from "../Assets/avatar-cartoon-eyes-female.png";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
      {
        id: 1,
        avatar: ava1,
        message: 'Hey, why nobody love me?',
        like: 11,
        dislike: 0,
      },
      {
        id: 2,
        avatar: ava2,
        message: 'It\'s our new program! Hey!',
        like: 9,
        dislike: 1,
      },
      {
        id: 3,
        avatar: ava3,
        message: 'Hi, It\'s my first post!',
        like: 21,
        dislike: 2,
      },
    ],
    newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                avatar: avaDefault,
                message: state.newPostText,
                like: 0,
                dislike: 0,
              };
              state.postsData.push(newPost);
              state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;