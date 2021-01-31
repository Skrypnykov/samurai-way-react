import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div className="content-image-header">
                <img src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3" alt=""/>
            </div>
            <div className="content-description-wrapper">
                <img src="https://cdn1.iconfinder.com/data/icons/robotics/128/_Artificial_Intelligiance-512.png" alt=""/>
                <div className="content-description">
                    <h4 className="content-description-title">Oleg S.</h4>
                    <p className="content-description-date">Date of Birth: 24 August</p>
                    <p className="content-description-city">City: Dobropillya</p>
                    <p className="content-description-education">Education: School '19</p>
                    <p>Web: <a href="https://skrypnykov.github.io/" className="content-description-web">skrypnykov.github.io</a></p>
                </div>
            </div>
            <div className="content-posts">
                <h3 className="content-posts-title">My posts</h3>
                <div className="content-post-new">
                    <textarea name="comment" cols="120" rows="5"></textarea><br/>
                    <input type="submit" value="Send"/>
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;