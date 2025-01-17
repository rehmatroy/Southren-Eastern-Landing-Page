import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

import '../Call-Center-Services/CallCenterServices.css'

const MainCallCenterPage = () => {
  return (
    <Box className='main-container'
      sx={{
        position: 'relative',
        minHeight: {md: '100vh', sm: '100vh', xs: '70vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black overlay with 60% opacity
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'left', color: '#fff', paddingTop: '8rem', paddingBottom:'2rem'}} >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontSize: {xs:'14px', md: '21px'},
              fontWeight: 'light', 
              marginRight: { xs: '0', },
              letterSpacing:'1.5px',
              marginBottom:{ xs:'10px'}
            }}
          >
            A 24/7 U.S. Based Contact Center
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{
              fontWeight: 'bold', 
              fontSize: { xs: '14px', sm: '2.5rem', md: '58px', letterSpacing:'1.5px' },
              marginBottom:{ md:'17px', xs:'10px'}
            }}
          >
            SouthernEaster Call Center Services
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '7px', sm: '1rem', letterSpacing:'1px' }, marginBottom:{ md: '12px', xs:'10px'} }}>
            • &nbsp;&nbsp;Expert support to streamline your workflow and boost productivity.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '7px', sm: '1rem', letterSpacing:'1px' }, marginBottom:{ md: '12px', xs:'10px'} }}>
            • &nbsp;&nbsp;Dedicated to delivering high-quality services without compromise.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '7px', sm: '1rem', letterSpacing:'1px' }, marginBottom:{ md: '12px', xs:'10px'} }}>
            • &nbsp;&nbsp;Tailored solutions to maximize daily efficiency for your entire team.
          </Typography>
          <Box sx={{
            textAlign: { md:'left', sm:'left', xs:'center'}, marginTop: { md: '35px', sm: '30px', xs: '20px'}
          }}>
            <Button className='slider-btn' style={{width:'300px', backgroundColor:'#E64270', color:'#fff', textTransform:'capitalize', letterSpacing:'2px', borderRadius:'20px', padding:'8px', }} variant='solid'>Learn More</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainCallCenterPage;
