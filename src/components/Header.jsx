import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import linkedinLogo from '../logos/LI-In-Bug.png';
import gitLogo from '../logos/github-color.svg';
import hiLogo from '../logos/hi.gif';
import InfoIcon from '../logos/info_icon.png';
import ProjectIcon from '../logos/project_icon.png';

const headerStyles = {
  heading: {
    flexGrow: 1,
    fontWeight: '500',
    fontSize: '3.5vh',
    fontFamily: 'Source Code Pro Variable, Poppins, sen, Arial',
    userSelect: 'none',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1vw',
    '& .MuiTypography-root': {
      fontWeight: 400,
      color: 'lightBlue',
    },
    '& .MuiButton-root': {
      display: 'flex',
      alignItems: 'center',
      gap: '.25vw',
      '&:hover': {
        '& .MuiTypography-root': {
          fontSize: '1.2rem',
          fontWeight: 800,
        },
      },
      '& img': {
        width: '1.2rem', // Adjust the logo size to match font size (rem is relative to root)
        height: 'auto',
      },
    },
  },
};

export default function AppHeader(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          height: '15vh',
        }}
      >
        <Typography variant="h4" component="div" sx={headerStyles.heading}>
          <Box component="span" sx={{ color: '#33FF57' }}>
            &lt;
          </Box>
          <Box component="span" sx={{ color: 'lightgrey' }}>
            D
          </Box>
          <Box component="span" sx={{ color: 'white' }}>
            .Sharma
          </Box>
          <Box component="span" sx={{ color: 'orange' }}>
            !
          </Box>
          <Box component="span" sx={{ color: '#33FF57' }}>
            &gt;
          </Box>
        </Typography>
        <Box sx={headerStyles.buttonsContainer}>
          <Button>
            <Typography>Projects</Typography>
            <img src={ProjectIcon} alt=""></img>
          </Button>
          <Button onClick={() => props.scrollToSection('AppFooter')}>
            <Typography>About</Typography>
            <img src={InfoIcon} alt=""></img>
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/dikshant-sharma-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography>Linkedin</Typography>
            <img src={linkedinLogo} alt=""></img>
          </Button>
          <Button
            component="a"
            href="https://github.com/sdikshant89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography>Github</Typography>
            <img
              src={gitLogo}
              alt=""
              style={{
                width: '1.05rem',
              }}
            ></img>
          </Button>
          <Button onClick={props.handleOpen}>
            <Typography>Say Hi!</Typography>
            <img src={hiLogo} alt=""></img>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
