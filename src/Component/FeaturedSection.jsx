
import { Grid, Box, Typography, Button } from '@mui/material';

const FeaturedSection = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 6, backgroundColor: '#f5f5f5', }}>
            <Grid container spacing={2} alignItems="center" sx={{ border: 2, borderColor: '#ccc', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', width: '100%', mb: 4 }}>
                    Featured
                </Typography>
                {/* Image Side */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 2, // Adds space inside the border
                    }}
                >
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

                {/* Description Side */}
                <Grid item xs={12} md={6} sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Discover the Power of Nature
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Our herbal products are crafted with care using natural ingredients sourced sustainably from around the world. Rejuvenate your body and mind with our holistic remedies.
                    </Typography>
                    <Button variant="contained" color="primary">
                        Explore Products
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturedSection;
