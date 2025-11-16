import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

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
    
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;