import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const diaStyles = {
  dialog: {
    width: '100vw',
    height: '50vh',
    minWidth: '500px',
    minHeight: '500px',
  },
  dialogTitle: {
    m: 0,
    p: 2,
    backgroundColor: '#101214',
    fontSize: '3rem',
    fontWeight: '700',
    color: 'white',
  },
  formWrapper: {
    maxHeight: '50px',
    '& .MuiTextField-root': {
      marginBottom: 2,
      width: '100%',
      '& .MuiInputLabel-root': { color: 'lightgrey' },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#1876d1',
        },
        '&:hover fieldset': {
          borderColor: 'blue',
        },
      },
      '& .MuiInputBase-input': {
        color: 'white',
      },
    },
  },
};

function ContactPopup(props) {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleClear = () => {
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (e.target.checkValidity()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'ContactMe', ...formValues }),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    } else {
      alert('Form is invalid! Please check the fields');
    }
    e.preventDefault();
  };

  return (
    <Dialog
      PaperProps={{
        sx: diaStyles.dialog,
      }}
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle sx={diaStyles.dialogTitle} id="customized-dialog-title">
        Send Message
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ backgroundColor: '#101214' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={diaStyles.formWrapper}
          data-netlify="true"
          name="ContactMe"
          method="POST"
        >
          <input type="hidden" name="form-name" value="ContactMe" />
          <div>
            <TextField
              label="Name"
              required
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              inputProps={{
                pattern: '[A-Za-z ]+',
              }}
            />
          </div>
          <div>
            <TextField
              label="Email"
              required
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              inputProps={{
                type: 'email',
              }}
            />
          </div>
          <div>
            <TextField
              label="Message"
              multiline
              rows={4}
              required
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
            />
          </div>
          <DialogActions sx={{ backgroundColor: '#101214' }}>
            <Button
              variant="contained"
              onClick={handleClear}
              sx={{
                backgroundColor: 'red',
              }}
            >
              <Typography>Clear</Typography>
            </Button>
            <Button variant="contained" type="submit">
              <Typography>Send Hi!</Typography>
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ContactPopup;
