import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ModalPage from "../components/ModalPage";
import { useMain } from "../hooks/main";
import Usuario from "../pages/Usuario";

const MainLayout = () => {
    const {
        modalUpdateUsuarioOpen, 
        setModalUpdateUsuarioOpen,
        loadingBase
    } = useMain();
    return (
        <Box>
            <ModalPage open={modalUpdateUsuarioOpen} handleClose={() => setModalUpdateUsuarioOpen(false)} loading={loadingBase}>
                <Usuario />
            </ModalPage>
            <Navbar />
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;