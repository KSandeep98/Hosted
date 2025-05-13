import { Link } from 'react-router-dom';
import { Grid, Box, Typography, } from '@mui/material';

const AboutUs = () => {
    return (
        <Box sx={{ flexGrow: 1, px: '20px', py: 6, backgroundColor: '#fff' }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                       
                        gutterBottom
                        sx={{ textAlign: 'center', width: '100%',  fontWeight: 'bold' ,color: '#69c'}}
                    >
                        About Us
                    </Typography>
                </Grid>
                {/* Description Side */}
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        display: 'flex',
                        margin: 'auto',
                        px: 1,
                        justifyContent: { xs: 'center', md: 'center' },
                        alignItems: 'center',
                        textAlign: { xs: 'center', md: 'left' },
                        // px: { xs: 2, md: 4 }, // horizontal padding
                    }}
                >
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Discover the Power of Nature
                        </Typography>
                        <Typography variant="body1" color="text.secondary" >
                            Our herbal products are crafted with care using natural ingredients sourced sustainably from around the world. Rejuvenate your body and mind with our holistic remedies.
                        </Typography>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Typography style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>
                            View More →
                        </Typography>
                        </Link>
                    </Box>
                </Grid>

                {/* Image Side */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        src="/Featured.jpg"
                        alt="Featured"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            height: 300,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUs;
