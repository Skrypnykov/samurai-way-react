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
            <div>
              <button>Follow</button>
            </div>
          </div>
          <div className={s.wrapDescription}>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </div>
        </div>  
      </div>)
    }
    </div>;
};

export default Users;
