import { createBrowserRouter } from "react-router-dom";
import BannerHero from "../components/BannerHero";
import LayoutApp from "../layouts/LayoutApp";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PrivateRoute from "./privateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element:
      <LayoutApp>
        <BannerHero />
      </LayoutApp>,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/dashboard",
    children:[
      {
        path: "",
        element:
          <PrivateRoute>
            <div>Painel de Controle</div>
          </PrivateRoute>
      }
    ]
  }
]);

export default route;
