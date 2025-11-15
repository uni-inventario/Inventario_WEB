import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6", // Cor primária customizada (exemplo)
    },
    secondary: {
      main: "#19857b",
    },
  },
});
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
