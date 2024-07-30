// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ImageLogo from '../../images/logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <nav className="nav bg-body-tertiary">
            <img src={ImageLogo} className="img-fluid title" alt="Logo" />
            
    

            <ul className="navLinks">
                <li className="navItem"><Link to="/">Nouveau</Link></li>
                <li className="navItem"><Link to="/about">Homme</Link></li>
                <li className="navItem"><Link to="/contact">Femme</Link></li>
                <li className="navItem"><Link to="/contact">Enfant</Link></li>
            </ul>
            <form className="d-flex" role="search">
      <input className="form-control me-2 d-none d-md-block" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-primary d-none d-md-block" type="submit">Search</button>
           
           <IconButton className="d-md-none d-block mx-2" aria-label="delete" size="small">
         <MenuIcon fontSize='large' />
</IconButton>
<IconButton className="d-md-none d-block  mx-2" aria-label="delete" size="small">
         <SearchIcon fontSize='large' />
</IconButton>
           </form>
        </nav>
    );
};

export default Navbar;
