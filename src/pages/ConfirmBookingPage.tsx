import { Box, Button, Grid, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router';
import BookingSummary from '../components/BookingSummary';
import PageTitle from '../components/PageTitle';
import PageWithHeader from '../components/PageWithHeader';
import styles from '../theme/theme';

const ConfirmBookingPage = () => {
    const classes = styles()
    const navigate = useNavigate();

    return (
        <PageWithHeader>
            <PageTitle 
                heading="You're nearly set!"
                subHeading="You are just a few clicks away from securing your charter!"
            />
            <Box className={clsx(classes.fullWidthCenter, classes.marginBottomMd)}>
                <Stepper activeStep={0}  sx={{fontSize: '14px'}}>
                    {['Your booking', 'Payment', 'Confirmation'].map((label) => (
                    <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={3} >
                    <Box className={classes.paddingMdContainer} style={{width: '100%', background: 'lightgrey'}}>
                        <BookingSummary />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{width: '100%', background: 'lightgrey'}}>
                        <Stack spacing={4}>
                            <Stack spacing={2}>
                                <Typography variant="subtitle1">Send the owner a message</Typography>
                                <Typography variant="body1">Optional: Give as many details as possible so the can make our trio an unforgettable experience</Typography>
                                <TextField />
                            </Stack>

                            <Stack spacing={2}>
                                <Typography variant="subtitle1">Would you like to hire a skipper?</Typography>
                                <Typography variant="body1">Our triendly skippers will help you get the most out of your charter with their experience and expertise allowing you to just relax</Typography>
                                <TextField />
                            </Stack>

                            <Stack spacing={2}>
                                <Typography variant="subtitle1">Number of guests</Typography>
                                <Typography variant="body1">We need to know the number of guests in order to ensure your charter is properly insured.</Typography>
                                <TextField />
                            </Stack>

                            <Stack spacing={2}>
                                <Typography variant="subtitle1">Additional options</Typography>
                                <Typography variant="body1">To customise your experience you can add any of these options.</Typography>
                                <TextField />
                            </Stack>

                            <Button variant="contained" onClick={() => navigate('/checkout')}>Checkout</Button>

                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box style={{width: '100%', background: 'lightgrey'}}></Box>
                </Grid>
            </Grid>
            
        </PageWithHeader>
    );
}

export default ConfirmBookingPage;
