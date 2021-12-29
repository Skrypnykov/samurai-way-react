import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logoName from "../../Assets/logo-django.svg";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <h1>The Social Network</h1>
        <img src={logoName} alt="" />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth 
          ? <div className={s.logIn}>{props.login} &nbsp; <button className={s.logOutButton} onClick={props.logout}>Log out</button></div> 
          : <NavLink className={s.loginLink} to='/login'>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
