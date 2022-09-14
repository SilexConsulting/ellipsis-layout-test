import { Box, Button, Card, Grid, ImageList, ImageListItem, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import PageWithHeader from '../components/PageWithHeader';
import {ReactComponent as CaptainsHat} from "../assets/icons/captains_hat.svg";
import LocationIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import { styled } from '@mui/material/styles';

const CapIcon = styled(CaptainsHat)`
  font-size: 25px;
  width: 30px;
`

const BoatPage = () => {
    const navigate = useNavigate();
    return (
        <PageWithHeader>
            <Box sx={{display: 'flex', width: '100%'}} >
                <ImageList cols={isMobile ? 4 : 10} gap={8} sx={{width: '100%'}} rowHeight={150}>
                    {
                        ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7'].map( (item: string, key: number) =>
                        <ImageListItem cols={key === 0 ? 4 : 2} rows={key === 0 ? 2 : 1} key={key}>
                            <div style={{height: '100%', width: '100%', background: 'lightgrey'}} />
                        </ImageListItem>
                    )}
                </ImageList>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                        <Stack direction={"column"} spacing={4} sx={{width: '100%', background: 'lightgrey'}}>
                            <Typography variant="h1">
                                The Argo
                            </Typography>

                            <Typography variant="h2">
                                Offered by Noel Sharpe
                            </Typography>

                            <Box >
                                <LocationIcon />
                                <Typography variant="body1" >A port somewhere in the Saechelles</Typography>
                            </Box>

                            <Box >
                                <CapIcon  />
                                <Typography variant="body1" >This requires a skipper to rent</Typography>
                            </Box>

                            <Stack spacing={2}>
                                <Typography variant="h2">
                                    Description
                                </Typography>
                                <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </Stack>

                            <Stack spacing={2}>
                                <Typography variant="h2">
                                    Equipement
                                </Typography>
                                <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            </Stack>
                        </Stack>
                </Grid>

                <Grid item xs={12} md={4} justifyContent="flex-start">
                    <Card sx={{background: 'lightgrey'}}>
                        <Stack spacing={4}>

                            <Typography variant="h2">
                                Book this Vessel
                            </Typography>

                            <Stack spacing={4} direction={'row'} >
                                <TextField sx={{flexGrow: 1}}/>
                                <TextField sx={{flexGrow: 1}}/>
                            </Stack>

                            <TextField />
                            <Button variant="contained" onClick={() => navigate('/confirmbooking')} >Book</Button>


                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </PageWithHeader>
    );
}

export default BoatPage;
