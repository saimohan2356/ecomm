import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BsChevronExpand} from "react-icons/bs";
import  "./navbar.scss"
import{BiSearchAlt2} from "react-icons/bi"


import { useState } from 'react';
import Flag from 'react-world-flags';
const Navbar = ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
   <div className='ap'>
    <img className="logo"src="https://chawkbazar.vercel.app/assets/images/logo.svg"></img>
    <div>Demos</div>
    <div>Men's wear</div>
    <div>Women's wear</div>
    <div>Search</div>
    <div>Shop</div>
    <div>Pages</div>
    <div>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Flag code = 'us'/>
        English-EN
        <BsChevronExpand/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Flag className="flags" height={20} code='IN'/>Profile</MenuItem>
        <MenuItem onClick={handleClose}><Flag className="flags" height={20} code='ES'/>My account</MenuItem>
        <MenuItem onClick={handleClose}><Flag className="flags" height={20} code='JP'/>Logout</MenuItem>
      </Menu>
      <BiSearchAlt2/>
      <h2>Sign in</h2>
    </div>
   </div>
    )
}
export default Navbar;