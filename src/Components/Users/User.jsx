import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../Assets/user.png";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div className={s.wrap}>
        <div className={s.wrapUser}>
          <NavLink to={'/profile/' + user.id}>
            <img className={s.avatar}
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
            />
          </NavLink>
          <div className={s.wrapButton}>
            {user.followed
              ? (<button disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { unfollow(user.id) }}>Unfollow</button>) 
              : (<button disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { follow(user.id) }}>Follow</button>)
            }
          </div>
        </div>
        <div className={s.wrapDescription}>
          <div className={s.alignment}>
            <span className={s.fullName}>{user.name}</span>
            <span className={s.statusUser}>{user.status}</span>
          </div>
          <div className={s.alignment}>
            <span className={s.country}>{"user.location.country"}</span>
            <span className={s.city}>{"user.location.city"}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default User;