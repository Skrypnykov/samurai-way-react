import React from "react";
import { reduxForm } from 'redux-form';
import s from "./ProfileInfo.module.css";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
// import { required } from "../../../Utils/Validators/validators";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <h4 className={s.contentTitle}>
            {createField(s.formItemInput, "full name", "fullName", "text", Input, [])}
        </h4>
        <div className={s.contentItem}>about me: &nbsp;
            {createField(s.formTextarea, "about me", "aboutMe", "text", Textarea, [])}
        </div>
        <div className={s.formCheckbox}>
            <label className={s.formCheckboxLabel} htmlFor="">
                {createField(s.formCheckboxInput, null, "lookingForAJob", "checkbox", Input, [])}
                &nbsp; looking for a job:
            </label>
        </div>
        <div className={s.contentItem}>my professional skills: &nbsp;
            {createField(s.formTextarea, "my professional skills", "lookingForAJobDescription", "text", Textarea, [])}
        </div>
        <div className={s.newSocialNetworkBlock}>
            {error && <span className={s.formControlError}>{error}</span>}
            <span className={s.socialNetworkTitle}>contacts:</span> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <span className={s.contactItem}>{key}: {createField(s.formItemInput, key, "contacts." + key, "text", Input, [])}</span>        
                </div>
            })
            }
            
        </div>
   
        <button className={s.saveProfileButton}>Save</button>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;
