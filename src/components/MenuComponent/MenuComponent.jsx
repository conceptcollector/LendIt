import React from 'react';
import {Link} from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="secondary"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="menu-dropdown"
        anchorEl={anchorEl}
        backgroundColor="secondary"
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          'backgroundColor': 'secondary'
        }}
      >
        <MenuItem>
            <Link to="/home">
                Home
            </Link></MenuItem>
        <MenuItem>
            <Link to="/profile">
                Profile    
            </Link>
        </MenuItem>
        <MenuItem>
            <Link to="/about">
                About
            </Link>
        </MenuItem>
        <MenuItem>
            <LogOutButton />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MenuComponent;