import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import profHeader from '../../Assets/prof-header.jpg';
import myAvatar from '../../Assets/avatar-icon-png.png';

const Profile = () => {
    return (
        <div>
            <div className={classes.header}>
                <img src={profHeader} alt=""/>
            </div>
            <div className={classes.description}>
                <img className={classes.avatar} src={myAvatar} alt=""/>
                <div className={classes.content}>
                    <h4 className={classes.contentTitle}>Oleg S.</h4>
                    <p className={classes.date}>Date of Birth: &nbsp;24 August</p>
                    <p className={classes.city}>City: &nbsp;Dobropillya</p>
                    <p className={classes.education}>Education: &nbsp;School '19</p>
                    <p className={classes.web}>web:	&nbsp;<a href="https://skrypnykov.github.io/" target="_blank" rel="noreferrer">https://skrypnykov.github.io/</a></p>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;