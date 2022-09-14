import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles, { theme } from '../theme/theme';
import HeaderNav from './HeaderNav';

interface OwnProps {
    heading: string
    subHeading: string
}
const PageTitle = (props: OwnProps) => {
    const classes = styles()
    const {
        heading = "",
        subHeading = "",
    } = props
    return (
        <Grid container width="100%" flexDirection="column" alignItems="center" >
            <Stack spacing={5} sx={{width: '100%', marginBottom: theme.spacing(4)}} alignItems="center">
                <Typography variant="h1">
                    {heading}
                </Typography>
                <Typography variant="h2">
                    {subHeading}
                </Typography>
                
                <div style={{maxWidth: `calc(100% - ${theme.spacing(4)})`, width: '100%', height: '1px', background: 'lightgrey'}}/>
            </Stack>
            

        </Grid>
    );
}

export default PageTitle;
