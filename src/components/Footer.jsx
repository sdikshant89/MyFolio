import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import gitLogo from '../logos/github-color.svg';
import linkedinLogo from '../logos/LI-In-Bug.png';

const footerStyles = {
  container: {
    width: '100%',
    height: '45vh',
    position: 'sticky',
    marginTop: '10vh',
    backgroundColor: '#181823',
    display: 'flex',
    justifyContent: 'space-between',
    userSelect: 'none',
    minHeight: '450px',
  },
  maName: {
    color: 'white',
    marginTop: '8vh',
    fontSize: '4rem',
    fontWeight: 700,
    marginLeft: '5vw',
    lineHeight: 1,
  },
};

export default function Footer({ scrollToSection }) {
  const [open, setOpen] = React.useState(false);

  const phoneNumber = '+17807168714';

  const handleClick = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setOpen(true);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
      }}
      id="AppFooter"
    >
      <Box sx={footerStyles.container}>
        <Box sx={{ width: '50%' }}>
          <Typography sx={footerStyles.maName}>Dikshant S.</Typography>
          <Typography sx={{ color: 'grey', marginLeft: '5vw' }}>
            (He/Him)
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginLeft: '5vw',
              marginTop: '1vh',
            }}
          >
            <a
              href="https://github.com/sdikshant89"
              target="_blank"
              rel="noopener noreferrer"
              size="0.2rem"
            >
              <img
                src={gitLogo}
                alt=""
                style={{
                  width: '1.5rem',
                }}
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/dikshant-sharma-/"
              target="_blank"
              rel="noopener noreferrer"
              size="0.2rem"
            >
              <img
                src={linkedinLogo}
                alt=""
                style={{
                  width: '1.8rem',
                  marginLeft: '0.5vw',
                }}
              ></img>
            </a>
          </Box>
          <Typography
            sx={{
              color: 'grey',
              marginLeft: '5vw',
              marginTop: '15vh',
              fontSize: '1rem',
            }}
          >
            No Copyright 2024
          </Typography>
          <Typography
            sx={{ color: 'white', marginLeft: '5vw', fontSize: '1rem' }}
          >
            Created by Dikshant Sharma
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            component="div"
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '8vh',
              marginLeft: '25vw',
              gap: 4,
              alignItems: 'flex-start',
            }}
          >
            <Button onClick={() => scrollToSection('WelcomePageContainer')}>
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Home
              </Typography>
            </Button>
            <Button onClick={() => scrollToSection('WorkExPage')}>
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Work Ex.
              </Typography>
            </Button>
            <Button>
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Projects
              </Typography>
            </Button>
            <Button onClick={() => scrollToSection('SkillsPageContainer')}>
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Skills
              </Typography>
            </Button>
            <Button>
              <Typography
                sx={{ color: 'white', fontSize: '1rem' }}
              ></Typography>
            </Button>
          </Box>
          <Box
            component="div"
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '8vh',
              marginLeft: '-5vw',
              gap: 4,
              alignItems: 'flex-start',
            }}
          >
            <Button
              component="a"
              href="mailto:sharma.dshan@gmail.com"
              sx={{ textDecoration: 'none' }}
            >
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Email
              </Typography>
            </Button>
            <Button onClick={handleClick}>
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Phone
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard"
        action={action}
        ContentProps={{
          sx: {
            backgroundColor: '#181823',
            border: '2px solid #4e5fdc', // Border color and width
            borderRadius: '4px',
            color: 'white',
          },
        }}
      />
      <Box
        sx={{
          backgroundColor: '#4e5fdc',
          position: 'sticky',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            lineHeight: 2,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          This website is made from scratch! Find the code on{' '}
          <a
            href="https://github.com/sdikshant89/MyFolio"
            style={{
              color: 'white',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            <u>Github</u>
          </a>
          .
        </Typography>
      </Box>
    </Box>
  );
}
