import React, { Component } from 'react'
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

import './Industries.css'

// import images-icons
import Healthcare from '../../Assets/healthcare.png'
import Insurance from '../../Assets/insurance.png'
import FinancialServices from '../../Assets/financial-services.png'
import Marketing from '../../Assets/marketing.png'
import Retail from '../../Assets/retail.png'
import Technology from '../../Assets/technology.png'
import Education from '../../Assets/education.png'
import Mortage from '../../Assets/mortage.png'
import TaxRelief from '../../Assets/taxrelief.png'
import Legal from '../../Assets/legal.png'
import Accounting from '../../Assets/accounting.png'
import Government from '../../Assets/government.png'

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(3),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.background.level1,
    }),
}));


export default class Industries extends Component {
    render() {
        return (
            <React.Fragment>
                <Box style={{ backgroundColor: '#ECECEC', overflowX: 'hidden', paddingTop:'25px', paddingBottom:'70px' }}>
                    <Container maxWidth="lg">
                        <Box className='slider-heading'>
                            <Typography className='call-center-heading' style={{ fontSize: '36px' }}>Industries We Serve</Typography>
                            <Box className='divider' style={{ display: 'flex', width: '180px', marginLeft: 'auto', marginRight: 'auto' }}>
                                <hr />
                                <hr />
                                <hr />
                            </Box>
                        </Box>
                    </Container>

                    <Grid mt={1} container rowSpacing={4} spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card  variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Healthcare} alt="img" />
                                        <Typography>Healthcare</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Insurance} alt="img" />
                                        <Typography>Insurance</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={FinancialServices} alt="img" />
                                        <Typography>Financial Services</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Marketing} alt="img" />
                                        <Typography>Marketing</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid mt={1} container rowSpacing={4} spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Retail} alt="img" />
                                        <Typography>Retail</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Technology} alt="img" />
                                        <Typography>Technology</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Education} alt="img" />
                                        <Typography>Education</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Mortage} alt="img" />
                                        <Typography>Mortgage</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid mt={1} container rowSpacing={4} spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                        <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                            <Item>
                                <Card variant='plain' style={{ width:'225px', backgroundColor: '#fff', padding:'0'}}>
                                    <CardContent className='industries-cards'>
                                        <img style={{width:'40px', marginLeft:'auto', marginRight:'auto', marginBottom:'10px'}} src={Accounting} alt="img" />
                                        <Typography>Accounting</Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>
                    </Grid>
                    <Box style={{ textAlign: 'center', paddingTop: '50px' }}>
                        <Button className='slider-btn' style={{ width: '200px', backgroundColor: '#4060AC', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '20px', padding: '8px' }} variant='solid'>And Many More!</Button>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}
