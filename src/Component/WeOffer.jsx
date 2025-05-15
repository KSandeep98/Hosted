import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    Box,
    Typography,
    Paper,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Laptop, Cpu, Terminal, Phone, Globe, Wifi, BookOpen, Lightbulb } from "lucide-react";

export default function WeOffer() {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

    const services = [
        {
            title: "STEM & Robotics Education",
            icon: <Laptop className="h-8 w-8 text-white" />,
            color: "#30c4c9",
            items: [
                "Robotics bootcamps and summer programs",
                "STEM curriculum for schools and colleges",
                "Arduino and Microcontroller-based learning",
                "Competitive robotics training",
                "DIY robotics kits and tutorials",
            ],
        },
        {
            title: "PCB Designing",
            icon: <Cpu className="h-8 w-8 text-white" />,
            color: "#1e3a6e",
            items: [
                "Custom PCB design for startups and innovators",
                "Multi-layer PCB layout",
                "SMD & Through-hole prototyping",
                "Design for manufacturing consulting",
                "IoT and embedded system PCB design",
            ],
        },
        {
            title: "Software Development",
            icon: <Terminal className="h-8 w-8 text-white" />,
            color: "#f26e3f",
            items: [
                "Custom software for business automation",
                "CRM and ERP solutions",
                "Cross-platform desktop applications",
                "Software integration and maintenance",
                "Software architecture & design",
            ],
        },
        {
            title: "App Development",
            icon: <Phone className="h-8 w-8 text-white" />,
            color: "#30c4c9",
            items: [
                "Native & cross-platform mobile apps",
                "Educational apps with robotics simulations",
                "IoT app integrations",
                "Real-time GPS and Bluetooth-based apps",
                "UI/UX design and prototyping",
            ],
        },
        {
            title: "Website Development",
            icon: <Globe className="h-8 w-8 text-white" />,
            color: "#1e3a6e",
            items: [
                "Responsive front-end and back-end development",
                "WordPress, Shopify, and custom CMS solutions",
                "UI/UX optimization and SEO-friendly designs",
                "E-learning platforms and portals",
                "Web hosting and domain services",
            ],
        },
        {
            title: "IoT Solutions",
            icon: <Wifi className="h-8 w-8 text-white" />,
            color: "#30c4c9",
            items: [
                "Smart home and industrial automation",
                "Sensor integration and data analytics",
                "Real-time monitoring systems",
                "IoT dashboards and mobile control apps",
                "Prototyping and deployment",
            ],
        },
        {
            title: "Educational Programs",
            icon: <BookOpen className="h-8 w-8 text-white" />,
            color: "#f26e3f",
            items: [
                "STEM and Robotics Courses",
                "IoT and Embedded Systems Training",
                "Coding Bootcamps",
                "PCB Designing & Hardware Prototyping",
                "Hands-on Workshops and Real-World Projects",
            ],
        },
        {
            title: "Innovation & Support",
            icon: <Lightbulb className="h-8 w-8 text-white" />,
            color: "#1e3a6e",
            items: [
                "Lab Setup Services",
                "Startup Prototyping & MVP Building",
                "Internships & Mentorships",
                "Tech Events & Hackathons",
                "Technology Consultation & Strategy Development",
            ],
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: isSmDown ? 1 : 2,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ px: 2, py: 4, maxWidth: 1200, mx: "auto" }}>
            <Typography variant="h4" fontWeight={600} textAlign="center" mb={3}>
                What We Offer?
            </Typography>

            <Slider {...settings}>
                {services.map((service, index) => (
                    <Box key={index} sx={{ px: 1 }}>
                        <Box
                            sx={{
                                textAlign: "center",
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 2,
                                overflow: "hidden",
                                bgcolor: "white",
                            }}
                        >
                            {/* Icon Circle */}
                            <Box
                                sx={{
                                    bgcolor: service.color,
                                    borderRadius: "50%",
                                    border: '3px solid white',
                                    width: 64,
                                    height: 64,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mx: "auto",
                                    mt: 3,
                                    mb: -2,
                                    zIndex: 1,
                                    position: "relative",
                                    boxShadow: 3,
                                }}
                            >
                                {service.icon}
                            </Box>

                            {/* Title */}
                            <Box
                                sx={{
                                    bgcolor: service.color,
                                    color: "white",
                                    py: 2,
                                    position: "relative",
                                    zIndex: 0,
                                }}
                            >
                                <Typography variant="h6">{service.title}</Typography>
                            </Box>

                            {/* Chevron Pointer */}
                            <Box
                                sx={{
                                    width: 0,
                                    height: 0,
                                    mx: "auto",
                                    borderLeft: "10px solid transparent",
                                    borderRight: "10px solid transparent",
                                    borderTop: `10px solid ${service.color}`,
                                }}
                            ></Box>

                            {/* List Items */}
                            {/* {service.items.map((item, i) => (
                                    <Box key={i} sx={{ px: 2, py: 1, borderBottom: 1, borderColor: "divider" }}>
                                        <Stack direction="row" spacing={1} alignItems="flex-start">
                                            <Typography variant="body2" color="text.secondary">•</Typography>
                                            <Typography variant="body2">{item}</Typography>
                                        </Stack>
                                    </Box>
                                ))} */}
                            {service.items.map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        borderBottom: 1,
                                        borderColor: "divider",
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="flex-start"
                                        justifyContent="flex-start"
                                        textAlign="left"
                                    >
                                        <Box sx={{ minWidth: "12px", textAlign: "left" }}>
                                            <Typography variant="body2" color="text.secondary">
                                                •
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2">{item}</Typography>
                                    </Stack>

                                </Box>
                            ))}


                        </Box>
                    </Box>
                ))}
            </Slider>

        </Box>
    );
}
