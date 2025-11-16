import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import WaveBackground from "../components/WaveBackground";
import Logo from "/logoSpan.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LinearIndeterminate from "../components/LoadingTop";
import { registerUser } from "../services/usuarioService";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!formData.nome || !formData.email || !formData.senha) {
      toast.error("Preencha todos os campos!");
      setIsLoading(false);
      return;
    }

    try {
      await registerUser(formData);
      toast.success("Registro realizado com sucesso!");
      navigate("/login")
    } catch (err) {
      err?.response?.data?.message &&
        err?.response?.data?.message?.forEach(msg => toast.error(msg))
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <WaveBackground />
      <LinearIndeterminate status={isLoading} />

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

          <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
            Seja bem-vindo!
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "gray" }}>
            Registre-se para acessar o sistema.
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome Completo"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="Endereço de Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading ? "Registrando..." : "Registrar"}
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(-1)}
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

export default RegisterPage;
