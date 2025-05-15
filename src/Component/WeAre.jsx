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

const WeAre = () => {
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
            Welcome To Hostedminds
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
            maxWidth="1000px"
            mx="auto"
            sx={{ color: '#555', fontSize: '1.1rem' }}
          >
            "Hostedminds is a pioneering technology and education company driven by a passion for innovation and a commitment to empowering the next generation of thinkers, creators, and problem-solvers. Established with a vision to bridge the gap between theoretical knowledge and practical application, we specialize in cutting-edge domains like Robotics, STEM education, PCB Designing, Software Development, App Development, Website Development, and the Internet of Things (IoT).
             We believe in learning by doing. That’s why every service, workshop, and course we offer is designed not just to teach but to inspire curiosity and spark creativity. Whether you're a student exploring the world of robotics or a business in need of digital solutions — Hostedminds is your partner in innovation."
          </Typography>
        </Box>
      </motion.div>


    </>
  );
};

export default WeAre;
