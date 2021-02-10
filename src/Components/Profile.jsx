import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.header}>
                <img src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3" alt=""/>
            </div>
            <div className={classes.description}>
                <img className={classes.avatar} src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png" alt=""/>
                <div className={classes.content}>
                    <h4 className={classes.contentTitle}>Oleg S.</h4>
                    <p className={classes.date}>Date of Birth: &nbsp;24 August</p>
                    <p className={classes.city}>City: &nbsp;Dobropillya</p>
                    <p className={classes.education}>Education: &nbsp;School '19</p>
                    <p className={classes.web}>web:	&nbsp;<a href="https://skrypnykov.github.io/" target="_blank" rel="noreferrer">https://skrypnykov.github.io/</a></p>
                </div>
            </div>
            <div className={classes.posts}>
                <h3 className={classes.postsTitle}>My posts</h3>
                <div className={classes.postNew}>
                    <textarea name="comment" cols="100" rows="3" placeholder="your news..."></textarea><br/>
                    <input type="submit" value="Send"/>
                </div>
                <div className={classes.message}>
                    <div className={classes.postItem}>
                        <img src="https://www.pngkey.com/png/full/119-1195864_avatar-transparent-female-cartoon.png" alt=""/>
                        <p>Hey, why nobody love me?</p>
                    </div>
                    <div className={classes.postItem}>
                        <img src="https://www.pngkey.com/png/full/827-8279659_i-drew-a-thing-for-my-friend-to.png" alt=""/>
                        <p>It's our new program! Hey!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;