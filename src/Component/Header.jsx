import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/", scrollToId: "services" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/", scrollToId: "contact" },
  { name: "Insights", href: "/Insights" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sectionsToObserve = ["services", "contact"];
    sectionsToObserve.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionsToObserve.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (item) => {
    setIsOpen(false);

    if (item.scrollToId) {
      if (location.pathname === "/") {
        scrollToSection(item.scrollToId);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(item.scrollToId), 300); // Give DOM time to render
      }
    } else {
      navigate(item.href);
    }
  };

  const isActive = (item) => {
    if (item.scrollToId) {
      return location.pathname === "/" && activeSection === item.scrollToId;
    }
    return location.pathname === item.href;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#69c", zIndex: 1200 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            display="flex"
            alignItems="center"
            component="a"
            href="/"
            sx={{ textDecoration: "none", color: "white", cursor: "pointer" }}
          >
            <img src="/Hm.png" alt="Logo" width={40} style={{ marginRight: 8 }} />
            <img src="/HostedMinds.png" alt="Brand" width={200} />
          </Box>

          {/* Desktop Menu */}
          {!isMobile ? (
            <Box display="flex" gap={1}>
              {navItems.map((item, index) => {
                const active = isActive(item);
                return (
                  <Button
                    key={index}
                    onClick={() => handleNavClick(item)}
                    sx={{
                      color: active ? "yellow" : "#fff",
                      fontSize: active ? "1.2rem" : "1rem",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "yellow",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 56,
            left: 0,
            width: "100%",
            backgroundColor: "#69c",
            zIndex: 1100,
            textAlign: "center",
          }}
        >
          {navItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                py: 1,
                fontSize: "18px",
                color: "white",
                cursor: "pointer",
                "&:hover": { color: "black" },
              }}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Header;
