import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import WaveBackground from "../components/WaveBackground";
import Logo from "/logoSpan.png";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import toast from "react-hot-toast";
import LinearIndeterminate from "../components/LoadingTop";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await login(formData.email, formData.password);

      toast.success("Login realizado com sucesso!");
      localStorage.setItem("access_token", JSON.stringify(response.data));
      navigate("s");
    } catch (err) {
      toast.error(err?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <WaveBackground />
      <LinearIndeterminate status={isLoading}/>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
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
            variant="h5"
            sx={{ mb: 1, color: "text.primary", fontWeight: 600 }}
          >
            Oi, bem-vindo de volta!
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Faça login para acessar sua conta!
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", marginTop: "8px" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Endereço de Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>

            <Button
              type="button"
              onClick={() => navigate(-1)}
              fullWidth
              variant="contained"
              sx={{ mb: 2, backgroundColor: "gray" }}
            >
              Voltar
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
