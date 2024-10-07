import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>GotNext</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/map">Map</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/tournaments">Tournaments</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </header>
    );
};

export default Header;
