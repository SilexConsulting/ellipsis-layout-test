import { Box, Button, Grid, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router';
import PageTitle from '../components/PageTitle';
import PageWithHeader from '../components/PageWithHeader';

const CheckoutCompletePage = () => {
    const navigate = useNavigate();

  return (
    <PageWithHeader>

        <PageTitle
            heading="Booking Complete"
            subHeading="An email will be sent to you with your booking information"
        />
        <Box >
            <Stepper activeStep={2}  sx={{fontSize: '14px'}}>
                {['Your booking', 'Payment', 'Confirmation'].map((label) => (
                <Step key={label}>
                    <StepLabel >{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
        <Grid container alignItems="center" flexDirection={"column"}>
            <TableContainer sx={{width: '500px', maxWidth: '100%'}}>
                <Table aria-label="simple table">
                    <TableBody >
                        {[
                            [
                                {name: 'Booking Reference', value: 'abcdefg'},
                                {name: 'Booking Reference', value: 'abcdefg'},
                            ],
                            [
                                {name: 'Booking Reference', value: 'abcdefg'},
                                {name: 'Booking Reference', value: 'abcdefg'},
                            ],
                            [
                                {name: 'Booking Reference', value: 'abcdefg'},
                                {name: 'Booking Reference', value: 'abcdefg'},
                            ],
                        ].map((prop: any, key: number) =>
                            <TableRow
                                key={key}
                                sx={{ '& td, & th': { border: 0 } }}
                            >
                                <TableCell align={'left'} component="th" scope="row" data-cy={prop[0]["data-cy"]}>
                                    <Typography variant="h5">{prop[0].name}</Typography>
                                    {prop[0].value}
                                </TableCell>

                                <TableCell align={'right'} component="th" scope="row" data-cy={prop[1]["data-cy"]}>
                                    <Typography variant="h5">{prop[1].name}</Typography>
                                    {prop[1].value}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography align={"center"} >Your booking details have been sent to your email</Typography>
            <Button variant="contained" onClick={() => navigate('/')} data-cy="homepageButton">
                    Continue to home page
            </Button>
        </Grid>
    </PageWithHeader>
  );
}

export default CheckoutCompletePage;
