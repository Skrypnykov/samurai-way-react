import ava1 from "../Assets/avatar-female.png";
import ava2 from "../Assets/avatar-friend.png";
import ava3 from "../Assets/avatar-of-nurse.png";
import ava4 from "../Assets/avatar-cartoon-eyes-female.png";

let rerenderEntireTree = () => {
  console.log("State changed");
};

let state = {
  profilePage: {
    postsData: [
      {
        id: 1,
        avatar: ava1,
        message: "Hey, why nobody love me?",
        like: 11,
        dislike: 0,
      },
      {
        id: 2,
        avatar: ava2,
        message: "It's our new program! Hey!",
        like: 9,
        dislike: 1,
      },
      {
        id: 3,
        avatar: ava3,
        message: "Hi, It's my first post!",
        like: 21,
        dislike: 2,
      },
    ],
    newPostText: "",
  },

  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Oleh" },
      { id: 2, name: "Hanna" },
      { id: 3, name: "Iryna" },
      { id: 4, name: "Serge" },
      { id: 5, name: "Niklas" },
      { id: 6, name: "Manuel" },
      { id: 7, name: "Tomas" },
      { id: 8, name: "Robert" },
    ],

    messagesData: [
      { id: 1000, message: "Hi!!!" },
      { id: 1001, message: "How are you?" },
      { id: 1002, message: "Very well!" },
      { id: 1003, message: "Yo" },
      { id: 1004, message: "Yo" },
      { id: 1005, message: "Yo" },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: 5,
    avatar: ava4,
    message: state.profilePage.newPostText,
    like: 0,
    dislike: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // observer
};

export default state;
