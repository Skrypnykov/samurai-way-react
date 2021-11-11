const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    {id: 1, fullName: "Oleg S.", status: "I am looking for a Job right now...", location: {city: "Dobropillya", country: "Ukraine"} },
    {id: 2, fullName: "Svetlana D.", status: "I am so pretty", location: {city: "Minsk", country: "Belarus"} },
    {id: 3, fullName: "Sergei S.", status: "I like football!!!", location: {city: "Kyiv", country: "Ukraine"} },
    {id: 4, fullName: "Andrew T.", status: "I am free to help to create good Video Production", location: {city: "Tallahassee", country: "United States"} },
    {id: 5, fullName: "Iryna S.", status: "I am a boss", location: {city: "Lviv", country: "Ukraine"} },
    {id: 6, fullName: "Victoria N.", status: "I am so pretty", location: {city: "Odessa", country: "Ukraine"} },
    {id: 7, fullName: "Maxim U.", status: "I like football!!!", location: {city: "Ankara", country: "Turkey"} },
    {id: 8, fullName: "Denys B.", status: "I am a boos too", location: {city: "Munchen", country: "Germany"} }
  ],
  newPostText: ""
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {};
    }
    case UPDATE_NEW_POST_TEXT: {
      return {};
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default usersReducer;