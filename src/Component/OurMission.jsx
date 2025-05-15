
import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { Hammer, Search, PackageCheck, BadgeCheck, Users } from "lucide-react";

export default function OurMission() {
  return (

    <Box
      id="mission"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 4,
        pt: 10,
        bgcolor: "grey.100",
        width: "100%",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#000",
        }}
      >
        Our Mission
      </Typography>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          width: "100%",
        }}
      >
        {/* Left Side - Mission Content Box */}
        <Box
          sx={{
            position: "relative",
            aspectRatio: "1/ 1",
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Circle />
        </Box>

        {/* Right Side - Info Panels */}
        <Stack spacing={2} sx={{ width: { xs: "100%", lg: "50%" }, pt: { xs: 4, lg: 8 } }}>
          <InfoPanel
            icon={<Hammer />}
            bgcolor="#1e3a8a" 
            title="Practical Over Theoretical"
            text="We focus on experiential learning. Whether it's building a line-following robot, designing a printed circuit board, or coding an app, our learners create something real and functional."
          />
          <InfoPanel
            icon={<Search />}
            bgcolor="#2563eb"  
            title="Curiosity-Driven Learning"
            text="We encourage asking “why” and “how” before jumping to answers. Curiosity is the foundation of creativity, and our programs are designed to fuel that innate desire to know more."
          />
          <InfoPanel
            icon={<PackageCheck />}
            bgcolor="#3b82f6"  
            title="Project-Based Teaching"
            text="Each of our courses — be it robotics or app development — is centered around projects. Students learn by building real-world applications, not just reading manuals or watching slides."
          />
          <InfoPanel
            icon={<Users />}
            bgcolor="#60a5fa"  
            title="Inclusivity and Accessibility"
            text="We aim to make cutting-edge technology accessible to all, including under-resourced schools and communities. Tech should empower everyone — not just the privileged few."
          />
          <InfoPanel
            icon={<BadgeCheck />}
            bgcolor="#93c5fd"  
            title="Industry-Relevant Skills"
            text="Our curriculum and services are aligned with 21st-century skills — coding, automation, AI basics, electronics, IoT, UI/UX, and more. Whether you're a student or a business, we help you stay ahead of the curve."
          />
        </Stack>

      </Box>
    </Box>

  );
}

function Circle() {
  return (
    <Box
      sx={{
        bgcolor: "#1e3a6e",
        p: 3,
        pt: 10,
        borderRadius: 4,
        color: "white",
        fontSize: "0.95rem",
        textAlign: "justify",
        width: "100%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      At Hostedminds, our mission is to transform the way technology is learned and applied.
      We aim to bridge the gap between curiosity and creation by delivering hands-on,
      practical education in robotics, coding, and emerging technologies. We believe learning
      should not be confined to books — it should involve experimentation, innovation, and
      real-world applications.

      <br />
      <br />

      Our mission is to empower students, educators, and enthusiasts with the tools,
      resources, and mindset they need to thrive in the digital age. Whether it’s building a
      robot, programming an app, or designing a smart circuit, we help learners turn ideas
      into impact.

      <br />
      <br />

      We’re committed to making tech education accessible to all — from schools in remote
      areas to aspiring innovators in cities — because everyone deserves the chance to build
      their future.

      <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
        <li>To promote practical, project-based learning in STEM and robotics</li>
        <li>To deliver impactful digital and IoT solutions that solve real-world problems</li>
        <li>To foster an inclusive tech community that nurtures talent and encourages  experimentation</li>
        <li>To inspire the next generation of engineers, developers, and entrepreneurs</li>
      </ul>
    </Box>
  );
}
function InfoPanel({ icon, bgcolor, title, text }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor,
        color: "white",
        borderRadius: 2,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          p: 1.5,
          borderRadius: "50%",
          color: "#1e293b",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Paper>
  );
}
