import React from "react";
import s from "./Header.module.css";
import logoName from "../../Assets/logo-django.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <h1>The Social Network</h1>
      <img src={logoName} alt="" />
    </header>
  );
};

export default Header;
