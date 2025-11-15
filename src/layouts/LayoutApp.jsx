import { ThemeProvider } from "@emotion/react";
import Navbar from "../components/Navbar";
import customTheme from "../theme/CustomTheme";

const LayoutApp = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default LayoutApp;
