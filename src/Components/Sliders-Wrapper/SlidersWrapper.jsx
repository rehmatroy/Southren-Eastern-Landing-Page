import React, { Component } from 'react'
import Container from '@mui/material/Container';
import { Box, Button} from '@mui/material'
import Typography from '@mui/material/Typography'
import Slider from '../Services-slider/Slider';

import './SlidersWrapper.css'

export default class SlidersWrapper extends Component {
    render() {
        return (
            <React.Fragment>
                <Box style={{backgroundColor: '#fff', paddingTop:'30px', paddingBottom:'70px'}}>
                    <Container maxWidth="lg">
                        <Box className='slider-heading'>
                            <Typography className='call-center-heading' style={{ fontSize: '36px' }}>Our Commitment to Tailored Service</Typography>
                            <Box mb={1} className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto' }}>
                                <hr />
                                <hr />
                                <hr />
                            </Box>
                        </Box>
                    </Container>
                    <Box>
                        <Box>
                            <Slider/>
                        </Box>
                        <Box style={{marginTop:"20px"}}>
                            <Slider/>
                        </Box>
                    </Box>
                    <Box className='slider-content' style={{width:'60%', textAlign:'center', marginLeft:'auto', marginRight:'auto', marginTop:'3rem'}}>
                        <Typography variant='h6' style={{color:'#383A3D', fontSize:'20px', lineHeight:'34.7px', fontWeight:'light'}}>At Southern Eastern Call Center (SECC), we are dedicated to providing exceptional solutions that enhance your efficiency and boost productivity. Our expertise lies in optimizing daily operations for your entire team, supporting your practice every step of the way.</Typography>
                        <Button className='slider-btn' style={{width:'300px', backgroundColor:'#E64270', color:'#fff', textTransform:'capitalize', letterSpacing:'2px', borderRadius:'20px', padding:'8px', marginTop:'2rem' }} variant='solid'>Learn More</Button>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
