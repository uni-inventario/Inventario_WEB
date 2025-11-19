import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import toast from "react-hot-toast";
import { logout } from "../services/authService";
import Logo from "/logo2.png";
import { useMain } from "../hooks/main";


function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {
        setLoadingSupremo,
        setModalUpdateUsuarioOpen,
        anchorEl,
        setAnchorEl
    } = useMain();

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpenDrawer(open);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePerfil = () => {
        setAnchorEl(null)
        setModalUpdateUsuarioOpen(true)
    }

    const handleLogout = async () => {
        try {
            setLoadingSupremo(true);
            handleClose();
            await logout();
            localStorage.removeItem("access_token");
            toast.success("Usuário desvinculado com sucesso !");
            window.location.href = "/";
        } catch (error) {
            toast.error("Erro ao sair, tente novamente !");
        } finally {
            setLoadingSupremo(false)
        }
    };

    const drawer = (
        <Box
            sx={{
                width: 280,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#f9f9fb",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 2,
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={Logo} alt="Logo" style={{ width: 45 }} />
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "primary.main", ml: 1 }}
                    >
                        StockFlow
                    </Typography>
                </Box>
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List sx={{ mt: 1 }}>
                <ListItem disablePadding>
                    <ListItemButton
                        component="a"
                        onClick={handlePerfil}
                        sx={{
                            display: "flex",
                            gap: 2,
                            "&:hover": {
                                backgroundColor: "rgba(0, 140, 255, 0.08)",
                            },
                        }}
                    >
                        <AccountCircle/>
                        <ListItemText primary="Perfil" sx={{ fontWeight: 600 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleLogout}
                        sx={{
                            display: "flex",
                            gap: 2,
                            color: "error.main",
                            "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.08)" },
                        }}
                    >
                        <LogoutIcon />
                        <ListItemText primary="Sair" sx={{ fontWeight: 600 }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" color="inherit" elevation={1} sx={{ height: '64px' }}>
            <Toolbar sx={{ padding: { xs: 3, sm: 2, md: 3 } }}>
                <Typography
                    variant="h7"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        color: "primary.main"
                    }}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: 50, height: 'auto', marginRight: 8 }}
                    />
                    StockFlow
                </Typography>
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            id="button-perfil"
                            onClick={handleMenu}
                            color="primary"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            PaperProps={{
                                elevation: 6,
                                sx: {
                                    mt: 1.5,
                                    borderRadius: 3,
                                    minWidth: 200,
                                    p: 1,
                                    bgcolor: "background.paper",
                                },
                            }}
                        >
                            <MenuItem
                                onClick={handlePerfil}
                                id="button-perfil-function"
                                sx={{
                                    borderRadius: 2,
                                    py: 1.5,
                                    px: 2,
                                    fontSize: 14,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    "&:hover": {
                                        backgroundColor: "primary.light",
                                        color: "white",
                                    },
                                }}
                            >
                                <AccountCircle fontSize="small" />
                                <span>Perfil</span>
                            </MenuItem>

                            <MenuItem
                                onClick={handleLogout}
                                sx={{
                                    borderRadius: 2,
                                    py: 1.5,
                                    px: 2,
                                    mt: 1,
                                    fontSize: 14,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    color: "error.main",
                                    "&:hover": {
                                        backgroundColor: "error.light",
                                        color: "white",
                                    },
                                }}
                            >
                                <LogoutIcon fontSize="small" />
                                <span>Sair</span>
                            </MenuItem>
                        </Menu>
                    </div>
                </Box>
                <IconButton
                    edge="end"
                    color="primary"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
                    {drawer}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
