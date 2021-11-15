import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  return <div className={s.title}>
    Users
    {
      props.users.map( u => <div key={u.id}>
        <div className={s.wrap}>
          <div className={s.wrapUser}>
            <div>
              <img className={s.avatar} src={u.photoUrl} alt="" />
            </div>
            <div className={s.wrapButton}>
              <button>Follow</button>
            </div>
          </div>
          <div className={s.wrapDescription}>
            <div className={s.alignment}>
              <div className={s.fullName}>{u.fullName}</div>
              <div className={s.statusUser}>{u.status}</div>
            </div>
            <div className={s.alignment}>
              <div className={s.country}>{u.location.country}</div>
              <div className={s.city}>{u.location.city}</div>
            </div>
          </div>
        </div>  
      </div>)
    }
    </div>;
};

export default Users;
