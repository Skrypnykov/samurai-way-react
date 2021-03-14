import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.wrap}>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
