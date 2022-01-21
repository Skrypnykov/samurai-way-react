import React from 'react';
import s from './ProfileInfo.module.css';
// import profHeader from '../../../Assets/prof-header.jpg';
import profilePhoto from "../../../Assets/avatarProfile.png";
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faVk, faTwitter, faInstagram, faYoutube, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={s.header}>
        {/* <img src={profHeader} alt="" /> */}
      </div>
      <div className={s.description}>
        <div className={s.profilePhoto}>
          <img className={s.mainPhoto} src={profile.photos.large != null ? profile.photos.large : profilePhoto} alt="" />
          {isOwner &&
            <div className={s.addPhotoWrap}>
              <label className={s.addPhotoLabel}>
              <input className={s.addPhotoInput} type={"file"} onChange={onMainPhotoSelected} /> 
                <span className={s.addImageWrap}><FontAwesomeIcon icon={faUpload} /></span>
                <span>Add photo</span>
              </label>
            </div>
          }
        </div>
        <div className={s.content}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          <h4 className={s.contentTitle}>{profile.fullName}</h4>
          <p className={s.contentItem}>about me: &nbsp;
            <span className={s.contentData}>{profile.aboutMe}</span>
          </p>
          <p className={s.contentItem}>looking for a job: &nbsp;
            <label className={s.switch}>
              <input className={s.switchInput} type="checkbox" value={profile.lookingForAJob} />
              <span className={s.slider}></span>
            </label>
          </p>
          <p className={s.contentItem}>description: &nbsp;
            <span className={s.contentData}>{profile.lookingForAJobDescription}</span>
          </p>

          <div className={s.socialNetworkWrap}>
            <ul className={s.socialNetwork}>
              <li><a className={s.facebook} href={profile.contacts.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /></a>
              </li>
              <li><a className={s.website} href={profile.contacts.website} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInternetExplorer} /></a>
              </li>
              <li><a className={s.vk} href={profile.contacts.vk} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVk} /></a>
              </li>
              <li><a className={s.twitter} href={profile.contacts.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li><a className={s.instagram} href={profile.contacts.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /></a>
              </li>
              <li><a className={s.youtube} href={profile.contacts.youtube} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} /></a>
              </li>
              <li><a className={s.github} href={profile.contacts.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /></a>
              </li>
              <li><a className={s.mainLink} href={profile.contacts.mainLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
