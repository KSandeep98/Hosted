import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const OurMission = () => {
  const theme = useTheme();

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box
        py={8}
        px={{ xs: 2, md: 6 }}
        id="our-mission"
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: 3,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
              >
                OUR GOAL
              </Typography>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                gutterBottom
              >
                Same Quality at Low Cost
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We have a unique and revolutionary business principle —
                "Same quality but significantly lower cost".
                We aim to fulfill the long-standing outsourcing vacuum felt by
                Small and Medium Enterprises across the country who, till now,
                were dependent mostly on offshore freelancers.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mt={2}
              >
                The hired professionals match their western counterparts in
                skills, qualifications, and experience — along with the added
                advantage of attractive low costs.
              </Typography>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} textAlign="center">
            <Box
              component="img"
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              alt="Business Goal"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: 3,
                boxShadow: 4,
                mt: { xs: 4, md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default OurMission;
