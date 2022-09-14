import { AppBar, Box, Button, IconButton, Stack } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import {isMobile} from 'react-device-detect';

const HeaderNav = () => {
    return (
            <AppBar position="fixed" style={{backgroundColor: 'white', boxShadow: "none"}} data-cy="header-bar">

                <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{height: '100%', width: '100px', background: 'lightgrey'}} />
                    {
                        isMobile ?
                        <Box>
                            <IconButton>
                                <MenuIcon sx={{fontSize: '20px'}} />
                            </IconButton>
                        </Box>
                        :
                        <Stack direction="row" spacing={1}>
                            <Button >
                                Register your Vessel
                            </Button>
                            <Button >
                                Login
                            </Button>
                            <Button variant="contained">
                                Sign up
                            </Button>
                        </Stack>
                    }
                </Box>
            </AppBar>


    );
}

export default HeaderNav;
