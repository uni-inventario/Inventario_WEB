import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar";
import customTheme from "./theme/CustomTheme";

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <ThemeProvider theme={customTheme}>
        <Navbar />
        {/* O resto do seu aplicativo */}
      </ThemeProvider>
    </>
  );
}

export default App;
