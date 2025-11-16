// Navbar.js
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Logo from "/logo2.png";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "Registrar-se", path: "/register" },
  { title: "Entrar", path: "/login" },
];

function Navbar() {
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
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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

        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ mt: 1 }}>
        {[
          { title: "Home", path: "#home", icon: <HomeIcon /> },
          { title: "Registrar-se", path: "#register", icon: <PersonAddIcon /> },
          { title: "Entrar", path: "#login", icon: <LoginIcon /> },
        ].map((item) => (
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

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {navLinks.map((item) => (
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
