import React from 'react';
import s from './ProfileInfo.module.css';
// import profHeader from '../../../Assets/prof-header.jpg';
import profilePhoto from "../../../Assets/avatar-man.png";
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faVk, faTwitter, faInstagram, faYoutube, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.header}>
        {/* <img src={profHeader} alt="" /> */}
      </div>
      <div className={s.description}>
        <img className={s.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : profilePhoto} alt="" />
        <div className={s.content}>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          <h4 className={s.contentTitle}>{props.profile.fullName}</h4>
          <p className={s.contentItem}>about me: &nbsp; 
            <span className={s.contentData}>{props.profile.aboutMe}</span>
          </p>
          <p className={s.contentItem}>looking for a job: &nbsp;
            <label className={s.switch}>
              <input className={s.switchInput} type="checkbox" value={props.profile.lookingForAJob} />
              <span className={s.slider}></span>
            </label>
          </p>
          <p className={s.contentItem}>description: &nbsp; 
            <span className={s.contentData}>{props.profile.lookingForAJobDescription}</span>
          </p>
          <ul className={s.socialNetwork}>
            <li><a className={s.facebook} href={props.profile.contacts.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li><a className={s.website} href={props.profile.contacts.website} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInternetExplorer} /></a>
            </li>
            <li><a className={s.vk} href={props.profile.contacts.vk} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVk} /></a>
            </li>
            <li><a className={s.twitter} href={props.profile.contacts.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li><a className={s.instagram} href={props.profile.contacts.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li><a className={s.youtube} href={props.profile.contacts.youtube} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} /></a>
            </li>
            <li><a className={s.github} href={props.profile.contacts.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li><a className={s.mainLink} href={props.profile.contacts.mainLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
