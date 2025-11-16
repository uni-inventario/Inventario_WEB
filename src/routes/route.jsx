import { createBrowserRouter } from "react-router-dom";
import BannerHero from "../components/BannerHero";
import Navbar from "../components/Navbar";
import LayoutApp from "../layouts/LayoutApp";
import { ListaEstoque } from "../pages/Estoque";
import RegisterPage from "../pages/Register";
import PrivateLogin from "./privateLogin";
import PrivateRoute from "./privateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutApp>
        <BannerHero />
      </LayoutApp>
    ),
  },
  {
    path: "/login",
    element: <PrivateLogin />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Navbar />
            <ListaEstoque />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default route;
