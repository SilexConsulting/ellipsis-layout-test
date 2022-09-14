import { Box, Button, Grid, Stack, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router';
import BookingSummary from '../components/BookingSummary';
import PageTitle from '../components/PageTitle';
import PageWithHeader from '../components/PageWithHeader';
import styles from '../theme/theme';

const CheckoutPage = () => {
    const navigate = useNavigate();
    return (
        <PageWithHeader>
            <PageTitle
                heading="You're nearly set!"
                subHeading="You are just a few clicks away from securing your charter!"
            />
            <Box >
                <Stepper activeStep={1}  sx={{fontSize: '14px'}}>
                    {['Your booking', 'Payment', 'Confirmation'].map((label) => (
                    <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={3} >
                    <Box  style={{width: '100%', background: 'lightgrey'}}>
                        <BookingSummary />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{width: '100%', background: 'lightgrey'}}>
                        <Stack spacing={4}>

                            <Stack spacing={2}>
                                <Typography variant="subtitle1">Payment Details</Typography>
                                <Typography variant="body1">Please provide your payment details and we will send you a confirmation email once the payment is finalised</Typography>

                                <TextField />
                                <Stack spacing={2} direction="row" width="100%">
                                    <TextField sx={{flexGrow: 1}}/>
                                    <TextField sx={{flexGrow: 1}}/>
                                </Stack>
                                <TextField />
                            </Stack>

                            <Button variant="contained" onClick={() => navigate('/checkout-complete')}>Checkout</Button>

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

export default CheckoutPage;
