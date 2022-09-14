import { Card, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import React from 'react';
import FeaturedBoatCard from '../components/FeaturedBoatCard';
import PageWithHeader from '../components/PageWithHeader';
import styles, { theme } from '../theme/theme';

const HomePage = () => {
    const classes = styles()
    return (
        <PageWithHeader>
            <Grid container className={classes.paddingMdContainer} sx={{position: 'relative'}}>
                <div style={{position: 'absolute', top: '0px', height: '100%', width: `calc(100% + ${theme.spacing(4)})`, left: `-${theme.spacing(2)}`, background: 'lightgrey', zIndex: -1}} />

                <Grid item xs={12} sm={6} md={5} lg={3}>
                    <Card className={classes.paddingMdContainer}>
                        <Stack spacing={4}>
                            <Typography variant='h1' align='center'>
                            Featured Boats
                            </Typography>
                            <FeaturedBoatCard />
                        </Stack>
                    </Card>
                </Grid>
                
            </Grid>

            <Typography variant='h1' align='left' className={clsx(classes.marginTopMd, classes.paddingMdContainer)}>
                All our vessels
            </Typography>
            <Grid container className={classes.paddingMdContainer} spacing={4} >
                {
                    [1,2,3,4,5,6,7,8].map(() =>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FeaturedBoatCard />
                        </Grid>
                    )
                }
            </Grid>

        </PageWithHeader>
    );
}

export default HomePage;
