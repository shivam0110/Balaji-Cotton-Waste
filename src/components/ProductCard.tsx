// src/components/ProductCard.tsx
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt={name}
      height="140"
      image="/path/to/image.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Box sx={{ mt: 2, color: "primary.main", fontWeight: "bold" }}>
        ₹{price}
      </Box>
    </CardContent>
  </Card>
);

export default ProductCard;
