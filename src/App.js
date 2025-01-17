import React from 'react';
import './App.css';
import { Box } from '@mui/material';

// import Components
import Industries from './Components/Industries/Industries';
import SlidersWrapper from './Components/Sliders-Wrapper/SlidersWrapper';
import CallCenterServices from './Components/Call-Center-Services/CallCenterServices';
import Testimonials from './Components/Testimonials/Testimonials';
import Navbar from './Components/Navbar/Navbar';
import MainCallCenterPage from './Components/Main-Call-Center-Page/MainCallCenter';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
       <Box className="app">
          {/* Navbar Compnent */}
          <Navbar/>

          {/* Main Components */}
          <MainCallCenterPage/>

          {/* Services Sliders Component */}
          <SlidersWrapper/>

          {/* Industies Services Component */}
          <Industries/>

          {/* Call-Center Services Component */}
          <CallCenterServices/> 

          {/* Contact-Form Component */}
          <ContactForm/>

          {/* Footer Component */}
          <Footer/>
       </Box>
    </React.Fragment>
  );
}

export default App;
