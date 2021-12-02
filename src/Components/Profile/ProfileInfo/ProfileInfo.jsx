import React from "react";
import s from "./ProfileInfo.module.css";
import profHeader from "../../../Assets/prof-header.jpg";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.header}>
        <img src={profHeader} alt="" />
      </div>
      <div className={s.description}>
        <img className={s.avatar} src={props.profile.photos.large} alt="" />
        <div className={s.content}>
          <h4 className={s.contentTitle}>{props.profile.fullName}</h4>

          <p className={s.contentItem}>about me: &nbsp; 
            <span className={s.contentData}>{props.profile.aboutMe}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
