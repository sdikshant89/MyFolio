import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/sen';
import '@fontsource/sen/400.css';
import '@fontsource/sen/500.css';
import '@fontsource/sen/700.css';
import '@fontsource/sen/800.css';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    // Default background color for the whole page
    background: {
      default: '#09042e',
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
          color: '#bad7d6',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'sen, Poppins, Arial, sans-serif',
        },
        body1: {
          fontWeight: 400,
          fontSize: '20px',
        },
      },
    },
  },
});
