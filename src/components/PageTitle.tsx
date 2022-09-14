import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';



interface OwnProps {
    heading: string
    subHeading: string
}
const PageTitle = (props: OwnProps) => {
    const {
        heading = "",
        subHeading = "",
    } = props
    return (
        <Grid container width="100%" flexDirection="column" alignItems="center" >
            <Stack spacing={5} sx={{width: '100%'}} alignItems="center" >
                <Typography variant="h1">
                    {heading}
                </Typography>
                <Typography variant="h2">
                    {subHeading}
                </Typography>

                <div style={{width: '100%', height: '1px', background: 'lightgrey'}} />
            </Stack>


        </Grid>
    );
}

export default PageTitle;
