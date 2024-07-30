// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageLogo from '../../images/logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import axios from 'axios';

const Navbaruser = () => {
    const navigate = useNavigate();

  const Logout = async()=> {
    await fetch('http://localhost:3001/user/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
     
  }
   
    return (
        <nav className="nav bg-body-tertiary">
            <img src={ImageLogo} className="img-fluid title" alt="Logo" />
            
    

            <ul className="navLinks">
                <li className="navItem"><Link to="/myprodect">My prodect</Link></li>
                <li className="navItem"><Link to="/Facture">Facture</Link></li>
                <li className="navItem"><Link to="/Commande">Commande</Link></li>
                <li className="navItem"><Link to="/about">Statistic</Link></li>
                
            </ul>
            
      
           
           <IconButton className="d-md-none d-block mx-2" aria-label="delete" size="small">
         <MenuIcon fontSize='large' />
</IconButton>


           
           <Button onClick={Logout} href='/login' variant="contained" endIcon={<LogoutIcon />}>
  Logout
</Button>
        </nav>
    );
};

export default Navbaruser;
