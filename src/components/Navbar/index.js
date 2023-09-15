import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import '../../App.css';

const Navbar = () => {
  const [location, setLocation] = useState('');
  const logo = 'https://upax.com.mx/hs-fs/hubfs/logo-UPAX-negro-1.png?width=300&height=91&name=logo-UPAX-negro-1.png';

  useEffect(() => {
    if (location) setLocation(window.location.pathname);
  }, [location]);

  return (
    <nav className='App-header'>
      <Link to='/'>
        <img src={logo} className='App-logo' alt='logo' />
      </Link>
      <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
        Rick & Morty
      </Typography>
      <div aria-label='nav tabs'>
        <NavLink
          exact
          activeClassName='nav-link-active'
          className='nav-link'
          to='/'
        >
          Characters
        </NavLink>
        <NavLink
          exact
          activeClassName='nav-link-active'
          className='nav-link'
          to='/episodes'
        >
          Episodes
        </NavLink>
        <NavLink
          exact
          activeClassName='nav-link-active'
          className='nav-link'
          to='/locations'
        >
          Locations
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;