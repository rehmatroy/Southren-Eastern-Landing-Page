import React from 'react';
// import '@fontsource/open-sans';
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Checkbox,
  Button,
  Link,
  FormControlLabel,
} from '@mui/material';

import './ContactForm.css'

import CompanyImg from '../../Assets/company.png'
import Google from '../../Assets/google.png'
import Hipa from '../../Assets/hipa.png'
import Pci from '../../Assets/pci.png'
import Iso from '../../Assets/iso.png'
import Captcha from '../../Assets/captcha.png'



function ContactForm() {
  return (
    <Container maxWidth="lg" sx={{ padding: '1rem', fontFamily: ' Montserrat' }}>
      <Container maxWidth="lg">
        <Box className='slider-heading'>
          <Typography className='call-center-heading' style={{ fontSize: '36px' }}>What are you waiting for? Enjoy our services with no long-term contracts—just a simple 30-day notice!</Typography>
          <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto' }}>
            <hr />
            <hr />
            <hr />
          </Box>
          <Box sx={{ width: {md: '550px', sm:'500px', xs:'100%'}}} mb={4} style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
            <Typography sx={{ color: '#686A6F', fontSize: '18px', letterSpacing: '1px' }}>Fill out the form below to learn how we can help you with
            your call center and answering service needs.</Typography>
          </Box>
        </Box>
      </Container>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6} mt={12} className='form-grid'>
          <Typography color="textSecondary" variant="body2" sx={{ fontSize: '18px' }}>
            Our simple pricing model lets you pay-as-you-go without any surprise fees or flat monthly rates.
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '1.3rem', color: '#4060AC', marginTop: '1rem', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>
            <li>No Monthly Contracts</li>
            <br />
            <li>No Monthly Fees</li>
            <br />
            {/* <li>Just Flexible Prepaid Minute Blocks</li> */}
          </Box>
          {/* <Typography variant="body2" color="textSecondary" mt={3} mb={5}>
            Once you fund or pre-pay for a block of minutes, any unused minutes will automatically roll over to the next month for up to 2 years!
          </Typography> */}

          <Grid container spacing={1} sx={{ textAlign: { md: 'left', sm:'left', xs:'center'}}}>
            <Grid item xs={6} >
              <img className='company-logo-best' src={CompanyImg} alt="Best Company" style={{ width:'180px' }} />
            </Grid>
            <Grid item xs={6}>
              <img className='company-logos-google' src={Google} alt="Google" style={{ width:'100px', marginTop:'8px' }} />
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={4} mt={4} sx={{ textAlign: { md: 'left', sm:'left', xs:'center'}}}>
            <Grid item xs={4}>
              <img className='company-logos-google' src={Hipa} alt="HIPAA Compliant" style={{ width:'100px' }} />
            </Grid>
            <Grid item xs={4}>
              <img className='company-logos' src={Pci} alt="PCI Compliant" style={{ width:'70px' }} />
            </Grid>
            <Grid item xs={4}>
              <img className='company-logos' src={Iso} alt="ISO Compliant" style={{ width:'70px' }} />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid #ddd',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: 1,
              backgroundColor: '#FFFFFF',
            }}
          >
            <Typography sx={{ fontSize: { md:'22px', sm:'22px', xs: '17px'}}} variant="h6" fontWeight="bold" mb={2} color='#383A3D' align="center">Learn More or Get Started</Typography>
            <Typography sx={{ fontSize: { md:'17px', sm:'17px', xs: '15px'}}} variant="body2" color="textSecondary" align="center">
              Get Custom Pricing & Access To Exclusive Deals.
            </Typography>
            <Box component="form" mt={3}>
              <Grid container spacing={2}>
                <Grid item md={6} sm={6} xs={12}>
                  <TextField fullWidth label="First Name" variant="outlined" required />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextField fullWidth label="Last Name" variant="outlined" required />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextField fullWidth label="Company Email" variant="outlined" required />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <TextField fullWidth label="Phone Number" variant="outlined" required />
                </Grid>
              </Grid>
              <Typography variant="body2" color="textSecondary" mt={2} fontSize="11px">
                * At SouthernEaster, we know how crucial discretion and privacy are to you and your clients.
                We promise that we will never sell, trade or give your contact information to anyone else.
              </Typography>
              <FormControlLabel
                control={<Checkbox required />}
                label={
                  <>
                    By submitting this form, I agree to SEEC's{' '}
                    <Link href="#" underline="hover">privacy policy</Link>.
                  </>
                }
                sx={{ marginTop: '1rem' }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I consent to receive SMS text messages and understand that message and data rates may apply. You can opt-out at any time by replying STOP."
              />
              <Box display="flex" alignItems="center" mt={2} mb={2}>
                <Box sx={{ marginLeft:'auto', marginRight:'auto', textAlign:'center', color:'#545454', fontSize:'16px', fontFamily:'sans-serif'}}>
                  <p>Prove You are human please!</p>
                  <img className='captcha-img' width="300px" src={Captcha} alt="reCAPTCHA" />
                </Box>
              </Box>
              <Box mt={3} style={{textAlign:'center'}}>
                <Button fullWidth variant="contained" style={{ width: '70%', backgroundColor: '#E64270', borderRadius: '30px' }} size="large">
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactForm;
