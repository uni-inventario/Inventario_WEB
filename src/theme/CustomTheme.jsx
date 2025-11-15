// theme.js
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#195597", // Seu azul para destaque de botões/links
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fff", // Um laranja que contrasta bem com azul
      contrastText: "#000000",
    },
    secondaryTeste: {
      main: "#FF9800", // Um laranja que contrasta bem com azul
      contrastText: "#000000",
    },
  },
  // Outras customizações como tipografia e espaçamento...
});

export default customTheme;
