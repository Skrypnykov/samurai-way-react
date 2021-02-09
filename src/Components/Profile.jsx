import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <div className="header-wrap">
                <img src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3" alt=""/>
            </div>
            <div className="description-wrap">
                <img className='description-avatar' src="https://cdn1.iconfinder.com/data/icons/robotics/128/_Artificial_Intelligiance-512.png" alt=""/>
                <div className="description-content">
                    <h4 className="description-title">Oleg S.</h4>
                    <p className="description-date">Date of Birth: &nbsp;24 August</p>
                    <p className="description-city">City: &nbsp;Dobropillya</p>
                    <p className="description-education">Education: &nbsp;School '19</p>
                    <p className="description-web">web:	&nbsp;<a href="https://skrypnykov.github.io/" target="_blank
">https://skrypnykov.github.io/</a></p>
                </div>
            </div>
            <div className="content-posts">
                <h3 className="posts-title">My posts</h3>
                <div className="post-new">
                    <textarea name="comment" cols="100" rows="3" placeholder="your news..."></textarea><br/>
                    <input type="submit" value="Send"/>
                </div>
                <div className='post-message'>
                    <div className='post-item'>
                        <img src="https://www.pngkey.com/png/full/353-3534482_avatar-portfolio-02-avatar-sketch-cartoon-avatar.png" alt=""/>
                        <p>Hey, why nobody love me?</p>
                    </div>
                    <div className='post-item'>
                        <img src="https://www.pngkey.com/png/full/99-992421_tab-store-avatar.png" alt=""/>
                        <p>It's our new program! Hey!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;