import React from 'react';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: '#25d366', // Set your desired background color
    color: '#fff', // Set your desired text color
    '&:hover': {
      backgroundColor: '#128c7e', // Set the hover background color
    },
    [theme.breakpoints.down('sm')]: {
      bottom: theme.spacing(8),
      right: theme.spacing(2),
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const WhatsAppChat = () => {
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number in international format
  const preFilledMessage = 'Hello! I need assistance.'; // Replace with your pre-filled message (optional)
  const classes = useStyles();

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(preFilledMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<WhatsAppIcon className={classes.icon} />}
      onClick={handleClick}
    >
      Chat on WhatsApp
    </Button>
  );
};

export default WhatsAppChat;
