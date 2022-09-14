import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const BookingSummary = () => {
    return (
        <Box>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography variant="subtitle1">Dates</Typography>
                    <Typography variant="body1">24th - 25th Sept 2022</Typography>
                </Stack>

                <Stack spacing={2}>
                    <Typography variant="subtitle1">Cost Summary</Typography>
                    <Typography variant="body1">Rental cost</Typography>
                    <Divider />
                    <Typography variant="body1">Service fee</Typography>
                    <Divider />
                    <Typography variant="body1">Total</Typography>
                </Stack>

            </Stack>
        </Box>
    );
}

export default BookingSummary;
