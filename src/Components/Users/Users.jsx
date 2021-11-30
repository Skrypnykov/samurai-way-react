import userPhoto from "../../Assets/user.png";
import React from "react";
import s from "./Users.module.css";

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
              <div>
                {
                  <img
                    className={s.avatar}
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt=""
                  />
                }
              </div>
              <div className={s.wrapButton}>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
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
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
