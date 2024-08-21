import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    // Default background color for the whole page
    background: {
      default: '#080235',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          transition: 'all 1s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          // Color of all the text in appBar
          color: 'White',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, Arial, sans-serif',
        },
        body1: {
          fontWeight: 300,
          fontSize: '20px',
        },
      },
    },
  },
});
