import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function InitialPopup(props) {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  return (
    <BootstrapDialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      sx={{}}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          backgroundColor: '#101214',
          fontSize: '2rem',
          color: 'white',
        }}
        id="customized-dialog-title"
      >
        Welcome!
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ backgroundColor: '#101214' }}>
        <Typography gutterBottom sx={{ color: 'white' }}>
          Thanks for visiting. I'm still in the process of creating this
          website. I'm happy to receive any feedback for the same. You can
          contact me at{' '}
          <a
            href="mailto:sharma.dshan@gmail.com"
            style={{
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <u>sharma.dshan@gmail.com</u>
          </a>
        </Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#101214' }}>
        <Button onClick={props.handleClose}>Close</Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

export default InitialPopup;
