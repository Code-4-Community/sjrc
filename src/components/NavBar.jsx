import React from 'react';
import './NavBar.css';
import logo from '../imgs/sjrc-logo-header.jpg';

const NavBar = () => {
    return (
        <nav className="site-navigation">
            <a href="https://www.northeastern.edu/sjrc/">
                <img src={logo} className="sjrc-logo" alt="sjrc logo"/>
            </a>
            <div className="navbar-buttons-container">
                <a href="https://google.com" className="navbar-tab">Home</a>
                <a href="https://google.com" className="navbar-tab">Channels</a>
                <a href="https://google.com" className="navbar-tab">Contact Us</a>
                <a href="https://google.com" className="login-tab-navbar">Login</a>
            </div>
        </nav>
    );
}

export default NavBar;
