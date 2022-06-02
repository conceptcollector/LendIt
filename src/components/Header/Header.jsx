import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import MenuComponent from '../MenuComponent/MenuComponent';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import './Header.css';

function Header() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
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
                <MenuComponent />
            )}
            </div>
            <Link to="/home">
                <h1 className="nav-title">lendIt</h1>
            </Link>
            <div className="header-carousel">
                <HeaderCarousel />
            </div>
        </div>
    )
}

export default Header;