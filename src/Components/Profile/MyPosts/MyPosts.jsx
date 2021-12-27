import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsEletemts = props.posts.map((p) => (
    <Post
      key={p.id}
      avatar={p.avatar}
      message={p.message}
      like={p.like}
      dislike={p.dislike}
    />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.posts}>
      <h3 className={s.postsTitle}>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsEletemts}
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form className={s.postNew} onSubmit={props.handleSubmit}>
      <Field
        className={s.postNewTextarea}
        component="textarea"
        name="newPostText"
        cols=""
        rows="3"
        placeholder="your post..."
      />
      <br />
      <button className={s.postNewButton}>Add post</button>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
