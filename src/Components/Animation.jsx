import React, { useState, useEffect } from "react";
import { Box, Typography, Slide } from "@mui/material";

const Animation = () => {
  const words = ["Adarsh", "College", "Hingoli"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("down");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setDirection((prevDirection) =>
          prevDirection === "down" ? "up" : "down"
        );
        setShow(true);
      }, 500); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          height: "40px", 
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Slide in={show} direction={direction} timeout={500}>
          <Typography variant="h2" component="div" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            {words[currentIndex]}
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default Animation;
