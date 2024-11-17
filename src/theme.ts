import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc6321", // Orange
      contrastText: "#FFFFFF", // White text on orange
    },
    secondary: {
      main: "#FFFFFF", // White
      contrastText: "#000000", // Black text on white
    },
    background: {
      default: "#FFFFFF", // White background
      paper: "#F5F5F5", // Light gray for paper components
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#757575", // Dark gray text
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: { color: "#FF9800" },
    h2: { color: "#FF9800" },
  },
});

export default theme;
