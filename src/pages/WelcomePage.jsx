import { Box, Typography } from '@mui/material';

function WelcomePage(props) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '85vh',
      }}
    >
      <Typography
        sx={{
          color: '#0b0943',
          fontWeight: 700,
          fontSize: '28rem',
          margin: 0, // Remove any margin
          padding: 0, // Remove any padding
          lineHeight: 0.75,
        }}
      >
        Hey!
      </Typography>
    </Box>
  );
}

export default WelcomePage;
