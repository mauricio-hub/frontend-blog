import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#212529",
        color: "#fff",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} BlogApp
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

const SubFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#343A40",
        color: "#fff",
        padding: "10px 0",
        textAlign: "center", // Centrar el texto
      }}
    >
      <Container maxWidth="md">
        <Typography variant="caption">
          Síguenos en nuestras redes sociales para mantenerte actualizado.
        </Typography>
      </Container>
    </Box>
  );
};

const MainFooter = () => {
  return (
    <div>
      <Footer />
      <SubFooter />
    </div>
  );
};

export default MainFooter;
