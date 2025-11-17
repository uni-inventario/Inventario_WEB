import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// Container com gradiente
const HeroContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100dvh",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(6, 2),
  background: "linear-gradient(135deg, #0A1F44 0%, #195597 50%, #1E88E5 100%)",
  color: "#fff",
}));

// Título responsivo
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "2.8rem",
  [theme.breakpoints.down("md")]: { fontSize: "2.3rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.9rem" },
}));

// Subtítulo
const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  marginBottom: theme.spacing(4),
  maxWidth: 500,
  fontSize: "1.2rem",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
}));

// Componente de Imagem
const HeroImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: 500,
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));

// Componente de Botão Estilizado (para a animação)
const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Adiciona transição
  "&:hover": {
    transform: "translateY(-3px)", // Move o botão 3px para cima no hover
    boxShadow: `0 8px 15px rgba(0, 0, 0, 0.3), 0 0 0 4px ${
      theme.palette.secondaryTeste?.main || theme.palette.primary.main
    }33`, // Adiciona sombra e um leve "ring"
  },
}));

export default function BannerHero() {
  const navigate = useNavigate();
  
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Texto */}
          <Grid item xs={12} md={6}>
            <HeroTitle>
              Controle total do seu estoque com tecnologia inteligente
            </HeroTitle>

            <HeroSubtitle>
              Automatize processos, reduza custos, previna perdas e acompanhe em
              tempo real todos os movimentos de estoque com uma plataforma
              moderna e eficiente.
            </HeroSubtitle>

            <AnimatedButton // Usando o novo componente com animação
              variant="contained"
              color="secondaryTeste"
              size="large"
              onClick={() => navigate("/register")}
              sx={{ paddingX: 4, paddingY: 1.5, borderRadius: "10px" }}
            >
              Cadastre-se Gratuitamente
            </AnimatedButton>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
}
