import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import WaveBackground from "../components/WaveBackground";
import Logo from "/logoSpan.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("", {
        // <-- TROQUE AQUI A URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Falha no login. Verifique suas credenciais."
        );
      }

      const data = await response.json();

      console.log("Login bem-sucedido:", data);
    } catch (err) {
      console.error("Erro durante o login:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <WaveBackground />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          zIndex: 1000,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            border: "1px solid #ccc",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <img src={Logo} alt="Logo" style={{ width: 140, height: 140 }} />
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mb: 1,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Oi, Bem vindo de volta!
          </Typography>
          <Typography
            component="span"
            variant="span"
            sx={{
              mb: 3,
              color: "gray",
              fontWeight: 400,
            }}
          >
            Faça login para acessar sua conta!
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
