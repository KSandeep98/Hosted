import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const OurGoal = () => {
  return (
    <>
      {/* Front Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box
          id="front"
          textAlign="center"
          px={2}
          py={10}
          sx={{ backgroundColor: '#f4f4f4' }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome, To HostedMinds
          </Typography>
          <Box
            component="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="about-us"
            width="100%"
            maxWidth="400px"
            mx="auto"
            my={3}
            boxShadow={3}
            borderRadius={2}
          />
          <Typography
            variant="body1"
            maxWidth="800px"
            mx="auto"
            sx={{ color: '#555', fontSize: '1.1rem' }}
          >
            " Our goal is to remove any technical or financial barriers that can prevent you from making your own website.
            Our powerful tools empower individuals and business owners to create a website, sell online, or reach global audiences.
            Whether you're a beginner or website expert, we're excited to help you on your journey! "
          </Typography>
        </Box>
      </motion.div>

      {/* First Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box
          id="first"
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          px={3}
          py={6}
          gap={4}
          sx={{ backgroundColor: '#fff' }}
        >
          <Box
            component="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt="growing-business"
            width={{ xs: '100%', md: '50%' }}
            boxShadow={3}
            borderRadius={2}
          />

          <Stack spacing={3} flex={1}>
            <Typography variant="h5" fontWeight="bold">
              We Offer Innovative Technology Solutions
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1rem' }}>
              HostedMinds is a full-service digital marketing agency with a long history of delivering great results.
              We take an individualized approach to every customer project. In some cases, we focus more on SEO,
              while in others we dive deeper into PPC, social media, or conversion optimization.
            </Typography>

            {/* Skills / Progress Bars */}
            {/* <Box>
              <Typography variant="subtitle1" gutterBottom>
                UI/UX Design (90%)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{ height: 10, borderRadius: 5, mb: 3 }}
              />

              <Typography variant="subtitle1" gutterBottom>
                APP Development (85%)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={85}
                sx={{ height: 10, borderRadius: 5, mb: 3 }}
              />

              <Typography variant="subtitle1" gutterBottom>
                WEB Development (70%)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box> */}
          </Stack>
        </Box>
      </motion.div>
    </>
  );
};

export default OurGoal;
