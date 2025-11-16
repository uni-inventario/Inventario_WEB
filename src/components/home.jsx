import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Página Inicial (Dashboard)
      </Typography>
      <Typography variant="body1">
        Bem-vindo ao Dashboard. Use o menu lateral para navegar.
      </Typography>
    </Box>
  );
};
