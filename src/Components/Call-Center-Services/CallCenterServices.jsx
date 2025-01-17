import React, { Component } from 'react'
import Container from '@mui/material/Container';
import { Box, } from '@mui/material'
import Typography from '@mui/material/Typography'

import './CallCenterServices.css'
import Testimonials from '../Testimonials/Testimonials';

export default class CallCenterServices extends Component {
    render() {
        return (
            <React.Fragment>
                <Box style={{ backgroundColor: '#fff', overflowX: 'hidden', paddingTop: '25px', paddingBottom: '70px' }}>
                    <Container maxWidth="lg">
                        <Box className='slider-heading'>
                            <Typography className='call-center-heading' style={{ fontSize: '42px', fontWeight: 'light' }}>Call Center Services We Offer</Typography>
                            <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto',  marginTop:'8px' }}>
                                <hr />
                                <hr />
                                <hr />
                            </Box>
                        </Box>
                    </Container>
                    <Box>
                        <Container maxWidth="lg">
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                Our services are tailored to meet the specific needs of your practice, covering a wide range of areas. Below are the key services we provide:
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Hygiene Care Calls
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Assistance with Scheduling: Help in managing appointments for one or more providers.
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Confirmation Calls
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Missed Appointment Reminders
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Treatment Opportunity Identification: Discover and schedule any pending treatments.
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Daily Email Reports: Receive updates on each call made and any progress.
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Weekly Courtesy Calls: Follow-up at the end of the week regarding surgeries performed by providers.
                            </Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                - Lead Recruitment: Engage with new leads through social media inquiries.
                            </Typography>
                            {/* one hour onboarding contetn */}
                            <Box sx={{marginBottom:'50px'}}>
                                <Typography className='call-center-heading' style={{ fontSize: '34px', color: '#383A3D' }}>Additional Services</Typography>
                                <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '13px',  marginTop:'8px' }}>
                                    <hr />
                                    <hr />
                                    <hr />
                                </Box>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                    In addition to the above, our team is always ready to support your business operations with the following services:
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Account Resolution Assistance: Help with calls aimed at resolving outstanding accounts.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Insurance Claim Tracing: Track claims to ensure timely processing.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Benefit Updates: Provide up-to-date information for patients during appointments.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Live Call Answering: Personal responses to inbound calls, eliminating recorded messages.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Detailed Coverage Verification: Confirm coverage benefits, maximums, deductibles, co-pays, and patient history
                                </Typography>
                            </Box>

                            {/* Testimonials Component */}
                            <Box sx={{width:'100%'}}>
                                <Testimonials/>
                            </Box>

                            {/* Dedicated computer content */}
                            <Box sx={{marginTop:'40px'}}>
                                <Typography className='call-center-heading' style={{ fontSize: '34px', color: '#383A3D' }}>Onboarding and Support</Typography>
                                <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '13px',  marginTop:'8px' }}>
                                    <hr />
                                    <hr />
                                    <hr />
                                </Box>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                    One-Hour Onboarding Call: Gain a deeper understanding of your office needs.
                                </Typography>
                                <Typography style={{ fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>Remote access to your computer using  Cloud Software</Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    HIPAA Compliance
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Dedicated Phone Line: Use your office phone number for all communications
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - One-Hour On boarding Call: Gain a deeper understanding of your office needs.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - Dedicated Computers: Access for your specialists with unique logins.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '25px', marginBottom: '20px' }}>
                                    - User Credentials: Customized usernames and logins for your practice.
                                </Typography>
                            </Box>

                            {/* User name and login content */}
                            <Box sx={{ marginTop: '50px' }}>
                                <Typography className='call-center-heading' style={{ fontSize: '34px', color: '#383A3D' }}>No long contract</Typography>
                                <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '13px',  marginTop:'8px' }}>
                                    <hr />
                                    <hr />
                                    <hr />
                                </Box>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '10px' }}>
                                    Flexible Contract Terms: No long-term commitments! We only require a 30-day notice for cancellation.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                    Sign a contract and business associate agreement</Typography>
                            </Box>

                            {/* No longer Contact Content */}
                            <Box>
                                <Typography className='call-center-heading' style={{ fontSize: '34px', color: '#383A3D' }}>Our Commitment to Tailored Service</Typography>
                                <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '13px',  marginTop:'8px' }}>
                                    <hr />
                                    <hr />
                                    <hr />
                                </Box>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                    Our Commitment to Tailored Service
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                    At Southern Eastern Call Center (SECC), we are dedicated to providing exceptional solutions that enhance your efficiency and boost productivity.
                                </Typography>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '30px', marginBottom: '20px' }}>
                                    Our expertise lies in optimizing daily operations for your entire team, supporting your practice every step of the way.
                                </Typography>
                            </Box>

                            {/* Remote Access Content */}
                            <Box sx={{marginTop:'60px'}}>
                                <Typography className='call-center-heading' style={{ fontSize: '34px', color: '#383A3D', textAlign:'center'}}>Our mission </Typography>
                                <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '13px', marginTop:'8px' }}>
                                    <hr />
                                    <hr />
                                    <hr />
                                </Box>
                                <Typography style={{ fontSize: '18px', fontWeight: 'light', color: '#383A3D', fontFamily: 'sans-serif', lineHeight: '36px', marginBottom: '24px',textAlign:'center' }}>
                                    to achieve excellence in service quality, a goal that resonates with those who share our commitment to high standards. Earning the trust of our valued clients is our top priority, as we strive to provide the support and guidance they need.
                                    To foster this trust, we are continuously focused on quality improvement and innovation. This dedication not only strengthens our relationships with clients but also ensures our team remains engaged in ongoing research and stays updated on the latest developments in the field.
                                    As a result, individuals from various backgrounds not only find confidence in our services but also enthusiastically recommend us to others.
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
