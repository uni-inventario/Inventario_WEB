import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import customTheme from "../theme/CustomTheme";

const LayoutApp = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default LayoutApp;
