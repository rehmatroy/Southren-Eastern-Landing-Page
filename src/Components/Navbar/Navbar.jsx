import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

import Logo from '../../Assets/logo.png'

import './Navbar.css'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Industries', path: '/industries' },
    { label: 'Services', path: '/services' },
    { label: 'Why Us', path: '/why-us' },
  ];

  return (
    <AppBar
      position="absolute" // Changed position to 'fixed'
      sx={{
        backgroundColor: '#fff',
        boxShadow: 'none',
        padding: '0.5rem 2rem',
        height: '80px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img className='logo' src={Logo} alt="Logo" style={{ width: '140px', }} />
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' }, gap: '2rem' }}>
          {navLinks.map((link) => (
            <Typography
              className='nav-items'
              key={link.label}
              component={Link}
              to={link.path}
              sx={{
                textTransform: 'capitalize',
                color: '#3A3C41',
                fontSize: '16px',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              <Link className='nav-list-items' href='#' sx={{ textDecoration: 'none', color: '#3A3C41', cursor: 'pointer' }}>{link.label}</Link>
            </Typography>
          ))}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button className='navbar-btn' style={{ backgroundColor: '#E64270', color: '#fff', width: '140px', borderRadius: '20px' }}>Connect</Button>
            <Box sx={{ color: '#4060ac', display: 'flex', alignItems: 'center' }}>
              <Link href='#'>
                <AccountCircleIcon sx={{ color: '#4060ac', marginRight: '0.5rem', marginLeft: "1rem" }} />
              </Link>
              <Link href='#'>
                <PhoneIcon sx={{ color: '#4060ac', marginRight: '0.5rem' }} />
              </Link>
              <Link href='#' sx={{ textDecoration: 'none', color: '#4060ac' }}>
                <Typography className='nav-items' variant="body1" sx={{ fontWeight: '500' }}>
                  +650-285-0186
                </Typography></Link>
            </Box>
          </Box>
        </Box>

        {/* Hamburger Menu Icon for Mobile */}
        <IconButton
          onClick={toggleDrawer}
          sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{
              width: 300,
              height: 340,
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
              alignItems: 'center',
              gap: '1rem',
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton component={Link} to={link.path}>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '0.5rem' }}>
              <Button style={{ backgroundColor: '#E87435', color: '#fff', width: '140px', borderRadius: '20px' }}>Connect</Button>
              <Box sx={{ display: 'flex', gap: '0.5rem', marginTop: '10px' }}>
                <AccountCircleIcon sx={{ color: '#4060ac' }} />
                <PhoneIcon sx={{ color: '#4060ac' }} />
                <Typography variant="body1" sx={{ fontWeight: '500' }}>
                  +650-285-0186
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
