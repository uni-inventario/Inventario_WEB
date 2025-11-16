import { Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";

const PrivateLogin = () => {
  let tokenData;
  try {
    tokenData = JSON.parse(localStorage.getItem("access_token"));
  } catch {
    tokenData = null;
  }

  const isAuthenticated =
    tokenData &&
    tokenData.expiresAt &&
    new Date(tokenData.expiresAt).getTime() >= Date.now();

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />;
};

export default PrivateLogin;
