import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: 'black' }}
        >
          Dikshant Sharma
        </Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
}
