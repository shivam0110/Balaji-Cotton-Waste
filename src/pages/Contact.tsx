import React from 'react';
import { Box, Container, Typography, Grid, Snackbar, Alert } from '@mui/material';
import { Phone, Email, WhatsApp } from '@mui/icons-material';

const Contact: React.FC = () => {
  const [alert, setAlert] = React.useState({ open: false, message: '', severity: 'success' });

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'url(/contact-banner.jpg) no-repeat center center',
          backgroundSize: 'cover',
          color: 'black',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            We're here to help. Get in touch with us.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information Section */}
      <Container sx={{ py: 2 }}>
        <Grid container spacing={4}>
          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Reach Out to Us
            </Typography>
            <Typography paragraph>
              Feel free to reach out via email, phone, WhatsApp, or visit us. Our team is always here to assist you.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <Phone sx={{ mr: 1 }} />
              📞 Phone: <a href="tel:+919016971871">+91-9016971871</a>
            </Typography>
            <Typography variant="h6" gutterBottom>
              <Email sx={{ mr: 1 }} />
              📧 Email: <a href="mailto:balajient05@rediffmail.com">balajient05@rediffmail.com</a>
            </Typography>
            <Typography variant="h6" gutterBottom>
              <WhatsApp sx={{ mr: 1 }} />
              📱 WhatsApp: <a href="https://wa.me/919016971871" target="_blank" rel="noopener noreferrer">Chat with us</a>
            </Typography>
            <Typography variant="h6" gutterBottom>
              📍 Address: Balaji Cotton Waste, Plot no 60, Sector 10A, Gandhidham, Gujarat 370201.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Google Maps Embed */}
            <Box sx={{ mt: 3 }}>
              <iframe
                title="Balaji Cotton Waste Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14684.344618089573!2d70.1370691!3d23.0573028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b9caba603783%3A0x6fd9a2929b70a1de!2sBalaji%20Cotton%20Waste!5e0!3m2!1sen!2sin!4v1731779772451!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for Alerts */}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleAlertClose} severity={alert.severity as any}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
