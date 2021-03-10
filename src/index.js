import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ava1 from "./Assets/avatar-female.png";
import ava2 from "./Assets/avatar-friend.png";
import ava3 from "./Assets/avatar-of-nurse.png";

let postsData = [
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
];

let dialogsData = [
  { id: 1, name: "Oleh" },
  { id: 2, name: "Hanna" },
  { id: 3, name: "Iryna" },
  { id: 4, name: "Serge" },
  { id: 5, name: "Niklas" },
  { id: 6, name: "Manuel" },
  { id: 7, name: "Tomas" },
  { id: 8, name: "Robert" },
];

let messagesData = [
  { id: 1, message: "Hi!!!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Very well!" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
