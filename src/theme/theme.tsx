import { createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const theme = createTheme({
  palette: {
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
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: `${theme.palette.error.light} !important`,
          marginRight: '1rem',
          marginLeft: '1rem'
        }),
      },
    },
    MuiButton: {
        styleOverrides: {
            root: ({ ownerState, theme }) => ({
              fontSize: 14,
              [theme.breakpoints.up('sm')]: {
                  width: 'fit-content'
              }
            })
        }
    }
  },
});

const styles = makeStyles(() =>
  createStyles({
    appBar: {
      display: 'flex', 
      boxSizing: 'border-box',
      padding: theme.spacing(5),
      height: '75px',
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center"
    },
    pageContainer: {
      width: '100%', 
      flexGrow: 1, 
      overflowY: 'auto', 
      overflowX: 'hidden', 
      paddingLeft: theme.spacing(2), 
      paddingRight: theme.spacing(2), 
      paddingBottom: theme.spacing(2),
      boxSizing: 'border-box'
    },
    boatDetailsInfoRow: {
      display: 'flex',
      alignItems: 'center'
    },
    boatDetailsInfoIcon: {
      fontSize: 25,
      width: '30px',
    },
    paddingMdContainer: {
      padding: theme.spacing(4),
      boxSizing: 'border-box'
    },
    paddingSmContainer: {
      padding: theme.spacing(2),
      boxSizing: 'border-box'
    },
    marginRightMd: {
      marginRight: theme.spacing(4)
    },
    marginBottomMd: {
      marginBottom: theme.spacing(4)
    },
    bookingCard: {
      boxSizing: 'border-box',
      padding: theme.spacing(4),
      width: '100%',
    },
    fullWidthCenter: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

  }), { index: 1 });

export default styles;
