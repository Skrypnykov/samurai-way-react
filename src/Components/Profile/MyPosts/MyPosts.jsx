import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postsEletemts = props.postsData.map((p) => (
    <Post key={p.id} avatar={p.avatar} message={p.message} like={p.like} dislike={p.dislike} />
    )
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postNew}>
        <textarea onChange={onPostChange} ref={newPostElement} name="comment" cols="100" rows="3" placeholder="your post..." value={props.newPostText} />
        <br/>
        <input type="submit" value="Add post" onClick={addPost} />
      </div>
      {postsEletemts}
    </div>
  );
};

export default MyPosts;
