import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import LogOutButton from '../LogOutButton/LogOutButton';

import './Header.css';

function Header() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <div className="header-carousel">
                <HeaderCarousel />
            </div>
                <Link to="/home">
                    <h1 className="nav-title">lendIt</h1>
                </Link>
            {/* If no user is logged in, show these links */}
            <div className="navLinks">
                {!user.id && (
                // If there's no user, show login/registration links
                    <Link className="navLink" to="/login">
                        Login / Register
                    </Link>
                )}

                {/* If a user is logged in, show these links */}
                {user.id && (
                    <>
                        <Link className="navLink" to="/home">
                            Home
                        </Link>
                        <Link className="navLink" to="/profile">
                            Profile    
                        </Link>
                        <Link className="navLink" to="/about">
                            About
                        </Link>
                        <LogOutButton className="navLink"/>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header;