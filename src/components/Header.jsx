import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import linkedinLogo from '../logos/LI-In-Bug.png';
import hiLogo from '../logos/hi.gif';

export default function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          height: '15vh',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, fontWeight: '700', fontSize: '5vh' }}
        >
          Dikshant.S
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            '& .MuiTypography-root': {
              fontWeight: 400,
              color: '#61A9F1',
            },
            '& .MuiButton-root': {
              display: 'flex',
              alignItems: 'center',
              gap: '.25vw',
              '&:hover': {
                '& .MuiTypography-root': {
                  fontSize: '1.2rem',
                  fontWeight: 700,
                },
                '& .hover-image': {
                  animationPlayState: 'paused', // Start animation on hover
                },
              },
              '& img': {
                width: '1.2rem', // Adjust the logo size to match font size (rem is relative to root)
                height: 'auto',
                animationPlayState: 'paused',
              },
            },
          }}
        >
          <Button>
            <Typography variant="body1">Projects</Typography>
          </Button>
          <Button>
            <Typography variant="body1">About</Typography>
          </Button>
          <Button>
            <Typography variant="body1">Linkedin</Typography>
            <img src={linkedinLogo} alt=""></img>
          </Button>
          <Button>
            <Typography variant="body1">Github</Typography>
          </Button>
          <Button>
            <Typography variant="body1">Say Hi!</Typography>
            <img src={hiLogo} alt=""></img>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
