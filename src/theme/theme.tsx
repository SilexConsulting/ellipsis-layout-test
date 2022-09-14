import { createTheme } from '@mui/material/styles';

export const theme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#378CB1',
      dark: '#19486A',
    },
    secondary: {
      main: '#58B77E'
    },
    error: {
      light: '#dc004e',
      main: '#f44336',
      dark: '#C5192D'
    },
    warning: {
      main: '#FD9D24'
    },
    info: {
      main: '#19486A'
    },
    success: {
      main: '#3F7E44',
    }
  },
  spacing: 4,
  typography: {
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1rem'
    },
    h6: {
      fontWeight: 'bold',
      color: "black",
    },
    subtitle1: {
      fontWeight: 900,
    },
    subtitle2: {
      color: '#9e9e9e',
      fontWeight: 900,
    },
    body1: {
      fontSize: 16,
      lineHeight: '1.2em',
      color: '#000',
    }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: 40
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          border: '0px',
          borderRadius: '5px',
          "&:hover": {
            border: '0px',
          },
          "&::before": {
            border: '0px',
          },
          "&::after": {
            border: '0px',
          },
          "&:hover:not(.Mui-disabled):before": {
            border: '0px',
          }
        },
      },
    }
  }
}

const styles = {
}

export default styles;
