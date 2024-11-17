// src/components/Header.tsx
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <img
        src="/logo.svg"
        alt="Logo"
        style={{ width: 40, height: 40, marginRight: 8 }}
      />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Balaji Enterprises
      </Typography>
      <Box>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
