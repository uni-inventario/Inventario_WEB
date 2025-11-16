import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LayoutApp = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutApp;
