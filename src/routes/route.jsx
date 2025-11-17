import { createBrowserRouter } from "react-router-dom";
import BannerHero from "../components/BannerHero";
import { ListaEstoque } from "../pages/estoquePages/Estoque";
import RegisterPage from "../pages/Register";
import PrivateLogin from "./privateLogin";
import PrivateRoute from "./privateRoute";
import { MainProvider } from "../hooks/main";
import MainLayout from "../layouts/MainLayout";
import Footer from "../layouts/Footer";
import NavbarLogout from "../layouts/NavbarLogout";
import ListProduto from "../pages/produtoPages/ListProduto";
import { ListaProduto } from "../pages/produtoPages/Produto";

const route = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <NavbarLogout />
        <BannerHero />
        <Footer />
      </>
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
    path: "/estoques",
    element:
      <PrivateRoute>
        <MainProvider>
          <MainLayout />
        </MainProvider>
      </PrivateRoute>,
    children: [
      {
        path: "",
        element: <ListaEstoque />,
      },
      {
        path: ":estoqueId/produtos",
        element: <ListaProduto />,
      },
    ],
  },
]);

export default route;
