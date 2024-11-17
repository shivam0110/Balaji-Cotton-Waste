import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const services = [
  {
    id: 1,
    title: 'Industrial Supply',
    description:
      'Supplying cotton waste to reputed organizations in Gujarat and across India, ensuring consistent national operations.',
  },
  {
    id: 2,
    title: 'Quality Supply',
    description:
      'Delivering cotton waste of specific quality and color, segregated by a skilled team of over 16 professionals.',
  },
  {
    id: 3,
    title: 'Quantity On Time',
    description:
      'With 80 tons of storage capacity, we ensure timely supply from ready stock, meeting large-scale needs efficiently.',
  },
  {
    id: 4,
    title: 'Value for Money',
    description:
      'Offering a wide variety of materials for the best value, fostering long-term relationships with our happy customers.',
  },
];

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'url(/home-banner.jpg) no-repeat center center',
          backgroundSize: 'cover',
          color: 'black',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold">
            Welcome to Balaji Cotton Waste
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Your trusted supplier of high-quality cotton waste for cleaning and industrial purposes.
          </Typography>
        </Container>
      </Box>

      {/* Image Carousel Section */}
      <Box sx={{ py: 2 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
            Our Cotton Waste Products
          </Typography>

          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            transitionTime={500}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img
                src="src/images/img1.jpg"
                alt="Cotton Waste Product 1"
                style={{ width: '100%', height: 'auto', fill: 'contain', maxHeight: '500px' }}
              />
            </div>
            <div>
              <img
                src="src/images/img2.jpg"
                alt="Cotton Waste Product 2"
                style={{ width: '100%', height: 'auto', fill: 'contain', maxHeight: '500px' }}
              />
            </div>
            <div>
              <img
                src="src/images/img3.jpg"
                alt="Cotton Waste Product 3"
                style={{ width: '100%', height: 'auto', fill: 'contain', maxHeight: '500px' }}
              />
            </div>
            <div>
              <img
                src="src/images/img4.jpg"
                alt="Cotton Waste Product 4"
                style={{ width: '100%', height: 'auto', fill: 'contain', maxHeight: '500px' }}
              />
            </div>
          </Carousel>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>{service.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Warehousing Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Warehousing & Packaging
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold">
              Warehousing
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Our state-of-the-art warehouse is segmented into various sections to store ample products with utmost
              safety, ensuring timely delivery to clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold">
              Packaging
            </Typography>
            <Typography sx={{ mt: 2 }}>
              All products are securely packed in our Packaging Lab to ensure safe transit and protection from damage
              during transportation.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Director's Message */}
      <Box sx={{ backgroundColor: '#fff4e0', py: 6, textAlign: 'center' }}>
        <Container>
          <Typography variant="h5" fontWeight="bold">
            Director's Message
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
            "We commit to delivering quality and embracing change, focusing on regularity and customer satisfaction."
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
            - Mr. Suresh Malpani
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
