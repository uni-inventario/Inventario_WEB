// Navbar.js (Ajustado)
import AccountCircle from "@mui/icons-material/AccountCircle"; // Ícone de Perfil
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout"; // Ícone de Logout
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings"; // Ícone de Configurações
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu"; // Importado para o menu de perfil
import MenuItem from "@mui/material/MenuItem"; // Importado para os itens do menu
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { logout } from "../services/authService";
import Logo from "/logo2.png";

const navLinksPublic = [{ title: "Home", path: "/", icon: <HomeIcon /> }];

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Estado para o Menu de Usuário (Perfil)

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

  const handleLogout = async () => {
    try {
      handleClose();
      await logout();
      localStorage.removeItem("access_token");
      toast.success("Usuário desvinculado com sucesso !");
      window.location.href = "/";
    } catch (error) {
      toast.error("Erro ao sair, tente novamente !");
    }
  };
  useEffect(() => {
    const checkAuthStatus = () => {
      const tokenString = localStorage.getItem("access_token");
      if (!tokenString) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const tokenData = JSON.parse(tokenString);
        const isAuthenticated =
          tokenData &&
          tokenData.expiresAt &&
          new Date(tokenData.expiresAt).getTime() >= Date.now();

        setIsLoggedIn(isAuthenticated);

        if (!isAuthenticated) {
          localStorage.removeItem("access_token");
        }
      } catch (error) {
        console.error("Erro ao verificar o token:", error);
        localStorage.removeItem("access_token");
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  const desktopLinks = isLoggedIn
    ? [{ title: "Dashboard", path: "/dashboard" }]
    : navLinksPublic;

  const drawerLinks = isLoggedIn
    ? [
        { title: "Home", path: "/", icon: <HomeIcon /> },
        { title: "Configurações", path: "/settings", icon: <SettingsIcon /> },
      ]
    : [
        { title: "Home", path: "/", icon: <HomeIcon /> },
        { title: "Registrar-se", path: "/register", icon: <PersonAddIcon /> },
        { title: "Entrar", path: "/login", icon: <LoginIcon /> },
      ];

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
        {drawerLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component="a"
              href={item.path}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 140, 255, 0.08)",
                },
              }}
            >
              {item.icon}
              <ListItemText primary={item.title} sx={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Botão de Logout Condicional no Drawer */}
        {isLoggedIn && (
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                color: "error.main",
                "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.08)" },
              }}
            >
              <LogoutIcon />
              <ListItemText primary="Sair" sx={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  // --- Conteúdo da AppBar (Desktop e Mobile) ---
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: 60, height: 40, marginRight: 8 }}
          />
          StockFlow
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {desktopLinks.map((item) => (
            <Button
              key={item.title}
              href={item.path}
              sx={{
                marginLeft: 1.5,
                color: "primary.main",
                fontWeight: 600,
              }}
            >
              {item.title}
            </Button>
          ))}

          {isLoggedIn ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
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
              >
                <MenuItem onClick={handleClose}>
                  <SettingsIcon sx={{ mr: 1 }} /> Configurações
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} /> Sair
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <Button
                href="/register"
                sx={{
                  marginLeft: 1.5,
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                Registrar-se
              </Button>
              <Button
                variant="contained"
                href="/login"
                sx={{ marginLeft: 1.5 }}
              >
                Entrar
              </Button>
            </>
          )}
        </Box>

        {/* --- MENU HAMBURGUER (MOBILE) --- */}
        <IconButton
          edge="end"
          color="primary"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer Mobile */}
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
