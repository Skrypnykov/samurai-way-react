import React from "react";
import s from "./ProfileInfo.module.css";
import profHeader from "../../../Assets/prof-header.jpg";
import myAvatar from "../../../Assets/avatar-man.png";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.header}>
        <img src={profHeader} alt="" />
      </div>
      <div className={s.description}>
        <img className={s.avatar} src={myAvatar} alt="" />
        <div className={s.content}>
          <h4 className={s.contentTitle}>Oleh S.</h4>
          <p className={s.date}>Date of Birth: &nbsp;24 August</p>
          <p className={s.city}>City: &nbsp;Dobropillya</p>
          <p className={s.education}>Education: &nbsp;School '19</p>
          <p className={s.web}>
            Web: &nbsp;
            <a href="https://skrypnykov.github.io/" target="_blank" rel="noreferrer">https://skrypnykov.github.io/</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
