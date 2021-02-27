import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import avatar1 from '../../../Assets/avatar-female.png';
import avatar2 from '../../../Assets/avatar-friend.png';
import avatar3 from '../../../Assets/avatar-of-nurse.png';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <h3 className={classes.postsTitle}>My posts</h3>
            <div className={classes.postNew}>
                <textarea name="comment" cols="100" rows="3" placeholder="your news..."></textarea><br/>
                <input type="submit" value="SEND"/>
            </div>
            <Post avatar={avatar1} message="Hey, why nobody love me?" like="11" dislike="0" />
            <Post avatar={avatar2} message="It's our new program! Hey!" like="9" dislike="1" />
            <Post avatar={avatar3} message="Hi, It's my first post!" like="21" dislike="2" />
            
        </div>
    );
}

export default MyPosts;