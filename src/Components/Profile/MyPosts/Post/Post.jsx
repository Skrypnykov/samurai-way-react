import React from 'react';
import classes from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const faLike = <FontAwesomeIcon icon={faThumbsUp} />
const faDislike = <FontAwesomeIcon icon={faThumbsDown} />

const Post = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.postItem}>
                <img src={props.avatar} alt=""/>
                <p>{props.message}</p>
            </div>
            <div className={classes.buttonWrap}>
                <button className={classes.button}>{faLike} <span>{props.like}</span></button>
                <button className={classes.button}>{faDislike}<span>{props.dislike}</span></button>
            </div>
        </div>
    );
}

export default Post;