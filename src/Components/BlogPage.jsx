import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  styled,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Sample blog post data
const blogPosts = [
  {
    title: "City Life Adventures",
    content: "The hustle and bustle of city life captured in moments.kjkjkljkljk jlkdg jgldjgl fdgjld  gdjl ",
    images: [
      "src/assets/images/image/1.jpg",
      "src/assets/images/image/2.jpg",
      "src/assets/images/image/3.jpg",
      "src/assets/images/image/4.jpg",
      "src/assets/images/image/5.jpg",
      "src/assets/images/image/6.jpg",
      "src/assets/images/image/7.jpg",
      "src/assets/images/image/img1.jpg",
      "src/assets/images/image/img2.jpg",
      "src/assets/images/image/img3.jpg",
      "src/assets/images/image/home3.jpg",
      "src/assets/images/image/home4.jpg",
      "src/assets/images/image/home5.jpg",
      "src/assets/images/image/home6.jpg",
      "src/assets/images/image/home2.jpg",
      "src/assets/images/image/home1.jpg",
     
    ],
  },
  
];

// Styled Paper component with hover effect
const AnimatedPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  // transition: "transform 0.3s, box-shadow 0.3s",
  // "&:hover": {
  //   transform: "scale(1.02)",
  //   boxShadow: theme.shadows[6],
  // },
  height: "100%", // Ensure the paper fills the height of its parent
}));

const BlogPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: 4,
        py: 2,
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Workshop & Insights
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="stretch" // Ensure all items have equal height
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        {blogPosts.map((post, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AnimatedPaper
              elevation={3}
              sx={{
                backgroundColor: "white",
                width: "90%",
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                width: isSmallScreen ? "100%": "90%",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {/* Carousel Section */}
              <Box
                sx={{
                  width: isSmallScreen ? "100%" : "50%",
                  height: isSmallScreen ? "250" : "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  dynamicHeight={false}
                  swipeable
                  emulateTouch
                  useKeyboardArrows
                >
                  {post.images.map((image, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Slide ${idx + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </Box>

              {/* Text Content Section */}
              <Box
                sx={{
                  width: isSmallScreen ? "100%" : "50%",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="p" paragraph>
                  {post.content}
                </Typography>
              </Box>
            </AnimatedPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPage;
