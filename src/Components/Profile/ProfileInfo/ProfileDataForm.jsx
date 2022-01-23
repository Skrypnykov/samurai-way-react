import React from "react";
import { reduxForm } from 'redux-form';
import s from "./ProfileInfo.module.css";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
import { required } from "../../../Utils/Validators/validators";

const ProfileDataForm = ({ profile }) => {
    return <form>
        <button className={s.editProfileButton} onClick={() => { }} >Save</button>

        <h4 className={s.contentTitle}>
            {createField(s.formItemInput, "Full name", "fullName", "text", Input, [required])}
        </h4>
        <p className={s.contentItem}>about me: &nbsp;
            <span className={s.contentData}>{profile.aboutMe}</span>
        </p>
        <p className={s.contentItem}>looking for a job: &nbsp;
            <label className={s.switch}>
                <input className={s.switchInput} type="checkbox" value={profile.lookingForAJob} />
                <span className={s.slider}></span>
            </label>
        </p>            
        <p className={s.contentItem}>my professional skills: &nbsp;
            {createField(s.formTextarea, "my professional skills", "lookingForAJobDescription", "text", Textarea, [required])}
        </p>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;
