import useMediaQuery from '@mui/material/useMediaQuery';
import {theme} from '../theme/theme'

function useIsMobile() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return isMobile
}

export default useIsMobile;
