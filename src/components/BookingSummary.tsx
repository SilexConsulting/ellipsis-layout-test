import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import styles from '../theme/theme';
import MenuIcon from '@mui/icons-material/Menu'
interface OwnProps {
}
const BookingSummary = (props: OwnProps) => {
    const classes = styles()
    const isMobile = useIsMobile()
    return (
        <Box
            className={classes.paddingSmContainer}
        >
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
