import { Box, Typography } from '@mui/material';
import gitLogo from '../logos/github-color.svg';
import linkedinLogo from '../logos/LI-In-Bug.png';

const footerStyles = {
  container: {
    width: '100%',
    height: '45vh', //Total height (minus) AppHeader height
    position: 'relative',
    marginTop: '15vh',
    backgroundColor: '#181823',
    display: 'flex',
    justifyContent: 'space-between',
    userSelect: 'none',
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

export default function Footer() {
  return (
    <Box>
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
        <Box sx={{ width: '50%' }}></Box>
      </Box>
      <Box sx={{ backgroundColor: '#4e5fdc' }}>
        <Typography
          sx={{
            color: 'white',
            lineHeight: 2,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          Yes! I made this website from scratch! Find the code on{' '}
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
