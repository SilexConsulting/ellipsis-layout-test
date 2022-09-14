import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../theme/theme';
import HeaderNav from './HeaderNav';

interface OwnProps {
    children: React.ReactNode
}
const PageWithHeader = (props: OwnProps) => {
    const classes = styles()
    return (
        <Box sx={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
            <HeaderNav />
            <Box className={classes.pageContainer} >
                {props.children}
            </Box>
        </Box>
    );
}

export default PageWithHeader;
