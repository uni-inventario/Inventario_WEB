import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X"; // Twitter/X
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "/logo2.png";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0A1F44 0%, #195597 60%, #1E88E5 100%)",
  color: "#ffffff",
  padding: '50px 20px 30px 20px'
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.3rem",
  marginBottom: theme.spacing(2),
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          display={"flex"}
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={4} md={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: 55, height: 40, marginRight: 10 }}
              />
              <Typography variant="h6" fontWeight="bold">
                StockFlow
              </Typography>
            </Box>

            <Typography
              color="#e0e0e0"
              lineHeight={1.6}
              width="auto"
              maxWidth={200}
            >
              Plataforma inteligente para gerenciamento de estoque, automação de
              processos e redução de custos.
            </Typography>
          </Grid>

          {/* LINKS RÁPIDOS */}
          <Grid item xs={12} sm={4} md={4}>
            <FooterTitle>Links Rápidos</FooterTitle>
            <Typography
              component="a"
              href="#home"
              color="#e0e0e0"
              sx={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: "#fff" },
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="#register"
              color="#e0e0e0"
              sx={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: "#fff" },
              }}
            >
              Registrar-se
            </Typography>
            <Typography
              component="a"
              href="#login"
              color="#e0e0e0"
              sx={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                "&:hover": { color: "#fff" },
              }}
            >
              Entrar
            </Typography>
          </Grid>

          {/* REDES SOCIAIS */}
          <Grid item xs={12} sm={4} md={4}>
            <FooterTitle>Siga-nos</FooterTitle>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{
                  color: "#fff",
                  mr: 1,
                  background: "rgba(255,255,255,0.15)",
                  "&:hover": { background: "rgba(255,255,255,0.3)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{
                  color: "#fff",
                  mr: 1,
                  background: "rgba(255,255,255,0.15)",
                  "&:hover": { background: "rgba(255,255,255,0.3)" },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  color: "#fff",
                  mr: 1,
                  background: "rgba(255,255,255,0.15)",
                  "&:hover": { background: "rgba(255,255,255,0.3)" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{
                  color: "#fff",
                  background: "rgba(255,255,255,0.15)",
                  "&:hover": { background: "rgba(255,255,255,0.3)" },
                }}
              >
                <XIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box
          textAlign="center"
          mt={6}
          pt={3}
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          <Typography variant="body2" color="#e0e0e0">
            © {new Date().getFullYear()} StockFlow — Todos os direitos
            reservados.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}
