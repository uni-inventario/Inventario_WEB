import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import customTheme from "./theme/CustomTheme.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={customTheme}>
    <Toaster position="top-center" reverseOrder={false} />
    <CssBaseline />
    <App />
  </ThemeProvider>
);
