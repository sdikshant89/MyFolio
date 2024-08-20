import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ].join(','),
          fontWeight: '500',
        },
        h5: {
          color: 'blueviolet!important',
        },
      },
    },
  },
});
