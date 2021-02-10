import React from 'react';
import classes from'./Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://static.djangoproject.com/img/logo-django.42234b631760.svg" alt=""/>
        </header>
    );
}

export default Header;