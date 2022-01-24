import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileDataFormReduxForm from './ProfileDataForm';
// import profHeader from '../../../Assets/prof-header.jpg';
import profilePhoto from "../../../Assets/avatarProfile.png";
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <div>
      <div className={s.header}>
        {/* <img src={profHeader} alt="" /> */}
      </div>
      <div className={s.description}>

        <div className={s.profilePhoto}>
          <img className={s.mainPhoto} src={profile.photos.large != null ? profile.photos.large : profilePhoto} alt="" />
          {isOwner && <div className={s.addPhotoWrap}>
            <label className={s.addPhotoLabel}>
              <input className={s.addPhotoInput} type={"file"} onChange={onMainPhotoSelected} />
              <span className={s.addImageWrap}><FontAwesomeIcon icon={faUpload} /></span>
              <span>Add photo</span>
            </label>
          </div>}
        </div>

        <div className={s.content}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

          {editMode
            ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
          }
        </div>
      
      </div> 
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <button className={s.editProfileButton} onClick={goToEditMode}>Edit profile</button>}
    <h4 className={s.contentTitle}>{profile.fullName}</h4>
    <div className={s.contentItem}>about me: &nbsp;
      <span className={s.contentData}>{profile.aboutMe}</span>
    </div>
    <div className={s.contentItem}>looking for a job: &nbsp;
      <span className={s.contentData}>{profile.lookingForAJob ? "yes" : "no"}</span>
    </div>
    {profile.lookingForAJob &&
      <div className={s.contentItem}>my professional skills: &nbsp;
        <span className={s.contentData}>{profile.lookingForAJobDescription}</span>
      </div>
    }
    <div className={s.socialNetworkBlock}>
      <span className={s.socialNetworkTitle}>contacts:</span> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })
      }
    </div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contactTitle}>{contactTitle}: <span className={s.contactValue}>{contactValue}</span></div>
}

export default ProfileInfo;
