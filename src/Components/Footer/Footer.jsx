import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, } from '@mui/icons-material';

import './Footer.css'

import QrcodeImg from '../../Assets/qrcode.png'
import FooterLogos from '../../Assets/footer-logos.png'

const Footer = () => {
  return (
    <Box component="footer" bgcolor="#212326" color="#BCBBBB" py={4}>
      <Container maxWidth="lg">
        <Grid mb={5} container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontSize: '16px' }} variant="h6" gutterBottom>
              ABOUT
            </Typography>
            <Typography variant="body2" fontSize='13px'>
              Value & Results
            </Typography>
            {/* QR Code visible only on larger screens */}
            <Box display={{ xs: "none", sm: "block" }}>
              <img style={{ marginTop: "20px" }} width="100px" src={QrcodeImg} alt="qrcode-image" />
            </Box>
            {/* <img style={{ marginTop: '20px' }} width='100px' src={QrcodeImg} alt="qrcode-image" /> */}
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontSize: '16px' }} variant="h6" gutterBottom>
              SOLUTIONS
            </Typography>
            <Box>
              {['American Call Centers', 'Call Center Services', 'Call Center Platform', 'Reservation Services', 'Lead Response Management'].map((item, index) => (
                <Typography key={index} variant="body2" mb={1} fontSize='13px'>
                  <Link href="#" color="inherit" underline="hover">{item}</Link>
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontSize: '16px' }} variant="h6" gutterBottom>
              INDUSTRIES
            </Typography>
            <Box>
              {['Healthcare', 'Insurance', 'Financial Services', 'Other Industries'].map((item, index) => (
                <Typography key={index} variant="body2" mb={1} fontSize='13px'>
                  <Link href="#" color="inherit" underline="hover">{item}</Link>
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontSize: '16px' }} variant="h6" gutterBottom>
              JOIN OUR TEAM
            </Typography>
            <Link fontSize='13px' href="#" color="inherit" underline="hover">BLOG</Link>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontSize: '16px' }} variant="h6" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body2">+650-285-0186</Typography>
            <Typography variant="body2">FAX +650-285-0188</Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Box sx={{ justifyContent: { md: 'center', sm: 'left', xs: 'left' } }} display="flex">
              <IconButton href="#" color="inherit"><Facebook /></IconButton>
              <IconButton href="#" color="inherit"><Twitter /></IconButton>
              <IconButton href="#" color="inherit"><LinkedIn /></IconButton>
            </Box>
            <Typography sx={{ fontSize: '15px', marginTop: "30px" }} variant="h6" gutterBottom>
              OUR ACCREDITATIONS
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              <img className='footer-logos' width='100%' src={FooterLogos} alt="PCI DSS" />
            </Box>
            {/* Mobile-only QR code at the end of the footer */}
            <Box display={{ xs: "flex", sm: "none" }} justifyContent="left" py={3}>
              <img width="100px" src={QrcodeImg} alt="qrcode-image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ boxShadow: "0px -7px 10px rgba(255, 255, 255, 0.1)", paddingLeft: { md: '70px', sm: '40px', sx: '10px' }, paddingRight: { md: '70px', sm: '40px', sx: '10px' } }}>
        <Box pt={3} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" >
          <Typography variant="body2" color="#BCBBBB" textAlign="center">
            © 2024, SouthernEaster. All rights reserved.
          </Typography>
          <Box display="flex" gap={1} justifyContent="center" mt={{ xs: 2, sm: 0 }}>
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            <Typography variant="body2" color="#BCBBBB">/</Typography>
            <Link href="#" color="inherit" underline="hover">Terms of Use</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
