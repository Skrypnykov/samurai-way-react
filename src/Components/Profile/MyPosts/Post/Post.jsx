import React from "react";
import s from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const faLike = <FontAwesomeIcon icon={faThumbsUp} />;
const faDislike = <FontAwesomeIcon icon={faThumbsDown} />;

const Post = (props) => {
  return (
    <div className={s.message}>
      <div className={s.postItem}>
        <img src={props.avatar} alt="avatar" />
        <p>{props.message}</p>
      </div>
      <div className={s.buttonWrap}>
        <button className={s.button}>
          {faLike} <span>{props.like}</span>
        </button>
        <button className={s.button}>
          {faDislike}
          <span>{props.dislike}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
