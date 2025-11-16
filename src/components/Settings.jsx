import { Box, Typography } from "@mui/material";

export const Settings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Configurações
      </Typography>
      <Typography variant="body1">
        Esta é a página de configurações da aplicação.
      </Typography>
    </Box>
  );
};
