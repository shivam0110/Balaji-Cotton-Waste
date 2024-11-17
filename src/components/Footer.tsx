// src/components/Footer.tsx
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => (
  <Box
    sx={{ bgcolor: "primary.main", p: 2, color: "white", textAlign: "center" }}
  >
    <Typography variant="body2">
      © 2024 Balaji Enterprises. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
