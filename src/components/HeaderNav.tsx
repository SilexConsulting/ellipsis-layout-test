import { AppBar, Box, Button, Grid, IconButton, Stack } from '@mui/material';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import styles from '../theme/theme';
import MenuIcon from '@mui/icons-material/Menu'
interface OwnProps {
}
const HeaderNav = (props: OwnProps) => {
    const classes = styles()
    const isMobile = useIsMobile()
    return (
        <React.Fragment>

            <AppBar position="fixed" style={{backgroundColor: 'white', boxShadow: "none"}} className={classes.appBar} data-cy="header-bar">     

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
            <Box className={classes.appBar}></Box>
        </React.Fragment >

    );
}

export default HeaderNav;
