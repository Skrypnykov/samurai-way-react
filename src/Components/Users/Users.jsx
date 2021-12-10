import React from "react";
import * as axios from 'axios';
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../Assets/user.png";
import { toggleFollowingProgress } from './../../redux/users-reducer';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <h2 className={s.title}>Users</h2>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={s.wrap}>
            <div className={s.wrapUser}>
              <NavLink to={'/profile/' + u.id}>
                <img className={s.avatar}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </NavLink>
              <div className={s.wrapButton}>
                {u.followed 
                  ? (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'a8051bff-0f4f-4056-b54f-7f5326bdab8d',
                          }
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                          props.toggleFollowingProgress(false, u.id);
                        }
                      });
                  }}>Unfollow</button>) :
                  (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'a8051bff-0f4f-4056-b54f-7f5326bdab8d',
                        }
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                          props.toggleFollowingProgress(false, u.id);
                        }
                      });
                  }}>Follow</button>)
                }
              </div>
            </div>
            <div className={s.wrapDescription}>
              <div className={s.alignment}>
                <div className={s.fullName}>{u.name}</div>
                <div className={s.statusUser}>{u.status}</div>
              </div>
              <div className={s.alignment}>
                <div className={s.country}>{"u.location.country"}</div>
                <div className={s.city}>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p); }}>
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;