import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <Link to="/home">
                <h1 className="nav-title">lendIt</h1>
            </Link>
            <div>
        {/* If no user is logged in, show these links */}
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
                    <Link className="navLink" to="/info">
                        Info Page
                    </Link>
                    <LogOutButton className="navLink" />
                </>
            )}
                <Link className="navLink" to="/about">
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header;