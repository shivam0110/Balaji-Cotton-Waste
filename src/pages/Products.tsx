import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const products = [
  {
    title: 'Hosiery Waste',
    description:
      'A superior range of cotton waste, including Banyan Cloth Waste, Hard Waste, and Textile Waste, ideal for machinery and equipment cleaning and recycling.',
  },
  {
    title: 'White Cotton & Hosiery',
    description:
      'Premium-quality cotton hosiery waste sourced from reliable vendors. Available at competitive prices, perfect for varied industrial applications.',
  },
  {
    title: 'Fleece Waste',
    description:
      'Durable and cost-effective cotton fleece waste for industrial and commercial use. Known for its longevity and quality, available at reasonable prices.',
  },
  {
    title: 'Jeans Wiper Cloth',
    description:
      'Heavy-duty cotton cut from blue denim jeans. Highly absorbent and suitable for grease and oil jobs, industrial machine cleaning, and general-purpose use.',
  },
  {
    title: 'Heavy Cotton Waste',
    description:
      'Soft and absorbent cotton cut from pants. Ideal for oil cleanup, grease, and mechanic work. A reliable choice for shop and industrial cleaning needs.',
  },
  {
    title: 'Light Cotton Waste',
    description:
      'Thin and soft cotton blend rags cut from light cotton fabrics like shirts and bedsheets. Perfect for industrial cleaning and maintenance.',
  },
  {
    title: 'Color T-Shirt Waste',
    description:
      'Cut from cotton blend t-shirts. Versatile wipers for automotive, industrial, and general cleaning purposes. Ideal for factories, machinery, and showrooms.',
  },
  {
    title: 'White T-Shirt Plain Wiper',
    description:
      'Soft and absorbent wipers cut from plain white cotton t-shirts. Suitable for use with solvents and cleaners, ideal for auto body work, furniture cleaning, and printing.',
  },
];

const Products: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'url(/products-banner.jpg) no-repeat center center',
          backgroundSize: 'cover',
          color: 'black',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold">
            Products & Services
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Supplying High-Quality Cotton Waste Solutions Nationwide
          </Typography>
        </Container>
      </Box>

      {/* Products Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Product Range
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                {/* <CardMedia component="img" image={product.image} alt={product.title} /> */}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography paragraph>{product.description}</Typography>
                  <Button variant="contained" color="primary" size="small">
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
