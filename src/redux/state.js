import ava1 from "../Assets/avatar-female.png";
import ava2 from "../Assets/avatar-friend.png";
import ava3 from "../Assets/avatar-of-nurse.png";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        newMessageBody: "",
      },
      sidebar: {}
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

    dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;