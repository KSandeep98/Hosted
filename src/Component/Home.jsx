import { Box, Button, Container, Typography } from "@mui/material";
const Home = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/intro-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ textAlign: "center", position: "relative", zIndex: 10 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3.75rem" },
          }}
        >
          Welcome to Hostedminds
          <Box component="span" sx={{ display: "block", color: "primary.main" }}>
            Explore the Possibilities
          </Box>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            maxWidth: "700px",
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Discover amazing features and unlock new opportunities with us.
        </Typography>

        <Button
          href="#features"
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "primary.main",
            '&:hover': {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};
export default Home;
