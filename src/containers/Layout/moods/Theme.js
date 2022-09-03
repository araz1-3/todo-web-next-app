import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {
    SunIcon,
    MoonIcon,
    DesktopComputerIcon,
  } from "@heroicons/react/outline";

      const Theme = () => {
        const [anchorEl, setAnchorEl] =useState(null);
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
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Theme
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}><SunIcon className="mr-2 h-5 w-5"/> Light</MenuItem>
                <MenuItem onClick={handleClose}><MoonIcon className="mr-2 h-5 w-5"/> Dark</MenuItem>
                <MenuItem onClick={handleClose}><DesktopComputerIcon className="mr-2 h-5 w-5"/> System</MenuItem>
              </Menu>
            </div>
          );
};

export default Theme;