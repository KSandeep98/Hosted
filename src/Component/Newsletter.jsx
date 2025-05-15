import { useState } from "react";
import { Mail } from "lucide-react";
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    Avatar,
} from "@mui/material";

export default function Newsletter() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email });
        setEmail("");
    };

    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url('/MessageBg.jpg')`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="lg" sx={{backgroundColor:'white', padding:2}}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mb: 6 }}
                >
                    <Grid item>
                        <Avatar
                            sx={{
                                bgcolor: "#1d4ed8",
                                width: 100,
                                height: 100,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ color: "white" }}>
                                <Mail size={50} />
                            </Box>


                        </Avatar>
                    </Grid>
                    <Grid item xs={12} md sx={{ textAlign: "center",  }} flexDirection="column">
                        <Typography
                            variant="h4"
                            component="h2"
                            fontWeight={600}
                            color="black"
                            gutterBottom
                            sx={{
                                backgroundColor: 'white',
                                display: 'inline',
                                px: 0,
                                borderRadius:5,
                                py: 0,
                                mx: 'auto',
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '2rem',
                                    md: '2.25rem',
                                },
                            }}
                        >
                            Subscribe To Our Newsletter
                        </Typography>

                        <Typography variant="h6" color="Black">
                            Join our newsletter to receive updates, news from our blog. Learn
                            about our products, services and get exciting discounts ahead of
                            time.
                        </Typography>
                    </Grid>
                </Grid>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                    }}
                >
                    <TextField
                        placeholder="Your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        type="email"
                        variant="filled"
                        sx={{
                            bgcolor: "#1d4ed8",
                            input: { color: "white" },
                        }}
                        InputProps={{ sx: { color: "white" } }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            bgcolor: "#69c",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "1.25rem",
                            px: 4,
                            py: 2,
                            borderRadius: 2,
                            ":hover": { bgcolor: "#f3f4f6" },
                            whiteSpace: "nowrap",
                        }}
                    >
                        SUBSCRIBE
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
