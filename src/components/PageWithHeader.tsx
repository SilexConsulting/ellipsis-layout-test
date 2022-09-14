import { Box } from '@mui/system';
import React from 'react';
import HeaderNav from './HeaderNav';

interface OwnProps {
    children: React.ReactNode
}
const PageWithHeader = (props: OwnProps) => {
    return (
        <Box sx={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
            <HeaderNav />
            <Box >
                {props.children}
            </Box>
        </Box>
    );
}

export default PageWithHeader;
