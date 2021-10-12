import ava1 from "../Assets/avatar-female.png";
import ava2 from "../Assets/avatar-friend.png";
import ava3 from "../Assets/avatar-of-nurse.png";
import ava4 from "../Assets/avatar-cartoon-eyes-female.png";

let store = {
    _state: {
      profilePage: {
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
    },
    _callSubscriber() {
      console.log("State changed");
    },
    
    getState() {
      return this._state;
    },
    subscribe(observer) {
      this._callSubscriber = observer;
    },

    addPost () {
      let newPost = {
        id: 5,
        avatar: ava4,
        message: this._state.profilePage.newPostText,
        like: 0,
        dislike: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
    },

    
}

export default store;
window.store = store;