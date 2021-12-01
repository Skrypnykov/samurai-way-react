import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEletemts = props.posts.map(p => <Post key={p.id} avatar={p.avatar} message={p.message} like={p.like} dislike={p.dislike} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postNew}>
        <textarea onChange={onPostChange} ref={newPostElement} name="comment" cols="" rows="3" placeholder="your post..." value={props.newPostText} />
        <br />
        <input type="submit" value="Add post" onClick={onAddPost} />
      </div>
      {postsEletemts}
    </div>
  );
};

export default MyPosts;
