import React from "react";
import classes from "./ProfileInfo.module.css";
import profHeader from "../../../Assets/prof-header.jpg";
import myAvatar from "../../../Assets/avatar-icon-png.png";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.header}>
        <img src={profHeader} alt="" />
      </div>
      <div className={classes.description}>
        <img className={classes.avatar} src={myAvatar} alt="" />
        <div className={classes.content}>
          <h4 className={classes.contentTitle}>Oleh S.</h4>
          <p className={classes.date}>Date of Birth: &nbsp;24 August</p>
          <p className={classes.city}>City: &nbsp;Dobropillya</p>
          <p className={classes.education}>Education: &nbsp;School '19</p>
          <p className={classes.web}>
            Web: &nbsp;
            <a
              href="https://skrypnykov.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              https://skrypnykov.github.io/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
