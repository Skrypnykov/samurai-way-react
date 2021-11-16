import ava1 from "../../Assets/avatar-icon-png.png";
import ava2 from "../../Assets/avatar-friend.png";

import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  
  if (props.users.length === 0) {
      props.setUsers( [
          {id: 1, followed: true, photoUrl: ava1, fullName: "Oleh S.", status: "I am looking for a Job right now...", location: {city: "Dobropillya", country: "Ukraine"} },
          {id: 2, followed: false, photoUrl: ava2, fullName: "Svetlana D.", status: "I am so pretty", location: {city: "Minsk", country: "Belarus"} },
          {id: 3, followed: true, photoUrl: ava1, fullName: "Sergei S.", status: "I like football!!!", location: {city: "Kyiv", country: "Ukraine"} },
          {id: 4, followed: false, photoUrl: ava1, fullName: "Andrew T.", status: "I am free to help to create good Video Production", location: {city: "Tallahassee", country: "United States"} },
          {id: 5, followed: true, photoUrl: ava2, fullName: "Iryna S.", status: "I am a boss", location: {city: "Lviv", country: "Ukraine"} },
          {id: 6, followed: true, photoUrl: ava2, fullName: "Victoria N.", status: "I am so pretty", location: {city: "Odessa", country: "Ukraine"} },
          {id: 7, followed: false, photoUrl: ava1, fullName: "Maxim U.", status: "I like football!!!", location: {city: "Ankara", country: "Turkey"} },
          {id: 8, followed: true, photoUrl: ava1, fullName: "Denys B.", status: "I am a boos too", location: {city: "Munchen", country: "Germany"} }
        ]
      )
  }
  
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
              { u.followed
                ? <button onClick={ () => { props.unfollow(u.id) } }>Follow</button>
                : <button onClick={ () => { props.follow(u.id) } }>Unfollow</button> }
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
