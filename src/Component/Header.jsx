// import { useState } from "react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#69c] text-white shadow-md z-50">
//       <div className="container mx-auto px-2 md:px-0 py-3  flex justify-between items-center">
//         {/* Left Side: Logo & Brand Name */}
//         <div className="flex items-center">
//           <a href="/" className="mx-2">
//             <img src="/Hm.png" width={40} alt="Logo" />
//           </a>
//            <a href="/">
//           <h1 className="font-bold hover:text-yellow-300 transition cursor-pointer">
//             HOSTEDMINDS
//           </h1>
//           </a>
//         </div>

//         {/* Right Side: Navigation & Mobile Menu Button */}
//         <div className="flex items-center">
//           {/* Mobile Menu Button - Appears only on small screens */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden focus:outline-none ml-4"
//           >
//             <div className="space-y-1">
//               <div className="w-6 h-1 bg-white"></div>
//               <div className="w-6 h-1 bg-white"></div>
//               <div className="w-6 h-1 bg-white"></div>
//             </div>
//           </button>

//           {/* Navigation Links */}
//           <ul
//             style={{ fontSize: "18px" }}
//             className={`absolute left-0 top-12 w-full bg-[#69c] text-center transition-all duration-300 ease-in-out md:static md:flex md:space-x-0 md:bg-transparent md:w-auto
//             ${
//               isOpen
//                 ? "opacity-100 visible"
//                 : "opacity-0 invisible md:opacity-100 md:visible"
//             }`}
//           >
//             {[
//               { name: "About", href: "/about" },
//               { name: "Services", href: "/#services" },
//               { name: "Shop", href: "/shop" },
//               { name: "Contact", href: "#contact" },
//               { name: "T&C", href: "/term" },
//             ].map((item, index) => (
//               <li key={index} className="py-2 md:py-0">
//                 <a
//                   href={item.href}
//                   className="block px-4 py-2 text-white hover:text-black transition"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom"; // Import useLocation for active route detection

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "Insights", href: "/Insights" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation(); // Get current route location

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#69c", zIndex: 1200 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo & Brand */}
          <Box
            display="flex"
            alignItems="center"
            component="a"
            href="/"
            sx={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <img
              src="/Hm.png"
              alt="Logo"
              width={40}
              className="logo-img"
              style={{
                marginRight: 8,
                transition: "filter 0.3s ease",
              }}
            />
            <img
              src="/HostedMinds.png"
              alt="Logo"
              width={200}
              className="logo-img"
              style={{
                marginRight: 8,
                transition: "filter 0.3s ease",
              }}
            />
            {/* <Typography
              fontWeight="bold"
              className="logo-text"
              sx={{
                fontSize: 18,
                transition: "color 0.3s ease",
              }}
            >
              HOSTEDMINDS
            </Typography> */}
          </Box>

          {/* Navigation Links or Mobile Menu Button */}
          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={1}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  href={item.href}
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    textTransform: "none",
                    '&:hover': { color: "#000" },
                    // Add underline and orange color for active state
                    borderBottom: location.pathname === item.href ? '2px solid orange' : 'none',
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Dropdown Menu (from Top) */}
      {isMobile && isOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 55, // height of AppBar
            left: 0,
            width: "100%",
            backgroundColor: "#69c",
            zIndex: 1100,
            textAlign: "center",
          }}
        >
          {navItems.map((item, index) => (
            <Box key={index} sx={{ py: 1 }}>
              <a
                href={item.href}
                style={{
                  color: "white",
                  fontSize: "18px",
                  textDecoration: "none",
                  transition: "0.3s",
                  // Add underline and orange color for active state in mobile menu
                  borderBottom: location.pathname === item.href ? '2px solid orange' : 'none',
                }}
                onMouseOver={(e) => (e.target.style.color = "#000")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                {item.name}
              </a>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Header;
