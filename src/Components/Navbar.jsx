import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><a href="#q">Profile</a></li>
                <li className="nav-item"><a href="#q">Messages</a></li>
                <li className="nav-item"><a href="#q">News</a></li>
                <li className="nav-item"><a href="#q">Music</a></li>
                <li className="nav-item"><a href="#q">Setting</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;