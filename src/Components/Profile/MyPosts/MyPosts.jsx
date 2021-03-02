import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ava1 from '../../../Assets/avatar-female.png';
import ava2 from '../../../Assets/avatar-friend.png';
import ava3 from '../../../Assets/avatar-of-nurse.png';

const MyPosts = () => {
    
    let posts = [
        {id: 1, avatar: ava1, message: 'Hey, why nobody love me?', like: 11, dislike: 0},
        {id: 2, avatar: ava2, message: 'It\'s our new program! Hey!', like: 9, dislike: 1},
        {id: 3, avatar: ava3, message: 'Hi, It\'s my first post!', like: 21, dislike: 2}
    ]
    
    let postsEletemts = posts.map( p =>  <Post avatar={p.avatar} message={p.message} like={p.like} dislike={p.dislike} /> );

    return (
        <div className={classes.posts}>
            <h3 className={classes.postsTitle}>My posts</h3>
            <div className={classes.postNew}>
                <textarea name="comment" cols="100" rows="3" placeholder="your news..."></textarea><br/>
                <input type="submit" value="Add post"/>
            </div>
                {postsEletemts}
        </div>
    );
}

export default MyPosts;