import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const strengths = [
  'Providing quality products',
  'Innovative gifting ideas',
  'Bulk supply',
  'Competitive prices',
  'Sophisticated Packaging',
  'On-time deliveries',
];

const qualityParameters = ['Durability', 'Finishing', 'Designs'];

const About: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'url(/about-banner.jpg) no-repeat center center',
          backgroundSize: 'cover',
          color: 'black',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold">
            About Us
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Trusted Supplier of Cotton Waste, Rags, and High-Quality Products Nationwide.
          </Typography>
        </Container>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Who We Are
        </Typography>
        <Typography paragraph>
          Balaji Cotton Waste has established itself as a leading supplier of hosiery, cotton waste, cotton rags, heavy
          cotton, light cotton, and more. With a commitment to quality and timely deliveries, we serve our clients
          across Gujarat and other states in India, as well as internationally. 
        </Typography>
        <Typography paragraph>
          We prioritize quality in every aspect of our operations, ensuring regularity, timely deliveries, and customer satisfaction. 
          By embracing change and innovation, we aim to foster long-term relationships with our clients. As we strive for excellence, 
          our belief is simple: a happy customer is what keeps us moving forward.
        </Typography>
        <Typography paragraph>
          Additionally, we supply lime stone from our Rajasthan mines and mill scale to various countries. Guided by
          the visionary leadership of our director, Mr. Suresh Malpani, we continue to innovate and meet the diverse
          demands of our customers.
        </Typography>
      </Container>

      {/* Strengths Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Strengths
          </Typography>
          <Grid container spacing={4}>
            {strengths.map((strength, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {strength}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Quality Assurance Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Quality Assurance
        </Typography>
        <Typography paragraph>
          At Balaji Cotton Waste, quality is at the core of everything we do. Our dedicated team ensures the use of
          premium-grade raw materials and advanced technology to deliver products that meet the highest standards. All
          products are rigorously tested on the following parameters:
        </Typography>
        <ul>
          {qualityParameters.map((parameter, index) => (
            <li key={index}>
              <Typography>{parameter}</Typography>
            </li>
          ))}
        </ul>
        <Typography paragraph>
          As a result, we offer products that are durable, eco-friendly, reasonably priced, and innovatively designed.
        </Typography>
      </Container>

      {/* Team Section */}
      <Box sx={{ backgroundColor: '#fff4e0', py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Team
          </Typography>
          <Typography paragraph>
            Our success is driven by a team of highly skilled and experienced professionals. Each team member brings
            industry expertise and a commitment to excellence, ensuring that we meet client-specific requirements
            seamlessly.
          </Typography>
          <Typography paragraph>
            The team effectively manages operations, optimizes resources, and upholds our reputation for quality and
            reliability.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
