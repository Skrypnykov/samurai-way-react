import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEletemts = props.postsData.map((p) => (
    <Post
      key={p.id}
      avatar={p.avatar}
      message={p.message}
      like={p.like}
      dislike={p.dislike}
    />
  ));

  return (
    <div className={classes.posts}>
      <h3 className={classes.postsTitle}>My posts</h3>
      <div className={classes.postNew}>
        <textarea
          name="comment"
          cols="100"
          rows="3"
          placeholder="your news..."
        ></textarea>
        <br />
        <input type="submit" value="Add post" />
      </div>
      {postsEletemts}
    </div>
  );
};

export default MyPosts;