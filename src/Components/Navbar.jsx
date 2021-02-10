import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}><a href="#q">Profile</a></li>
                <li className={classes.item}><a href="#q">Messages</a></li>
                <li className={classes.item}><a href="#q">News</a></li>
                <li className={classes.item}><a href="#q">Music</a></li>
                <li className={classes.item}><a href="#q">Setting</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;