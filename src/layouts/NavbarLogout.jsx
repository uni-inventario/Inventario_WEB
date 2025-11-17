import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { logout } from "../services/authService";
import Logo from "/logo2.png";
import LinearIndeterminate from "../components/LoadingTop";
import { useMain } from "../hooks/main";


function NavbarLogout() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const drawerLinks = [
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

      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="inherit" elevation={1} sx={{ height: '64px' }}>
      <Toolbar sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
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
          <Button
            href="/register"
            sx={{
              marginLeft: 1.5,
              color: "primary.main",
              fontWeight: 600,
              fontSize: 12
            }}
          >
            Registrar-se
          </Button>
          <Button
            variant="contained"
            href="/login"
            sx={{ marginLeft: 1.5, fontSize: 12 }}
          >
            Entrar
          </Button>
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

export default NavbarLogout;
