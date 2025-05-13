import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#69c',
        color: 'white',
        py: 5,
        px: 3,
        pl: { xs: 3, md: 12 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
        mt: 'auto',
        zIndex: 50,
      }}
    >
      {/* Left Section */}
      <Stack
        direction="row"
        spacing={{ xs: 2, md: 15 }}
        alignItems="flex-start"
        justifyContent={{ xs: 'center', md: 'flex-start' }} // Center on mobile
        width={{ xs: '100%', md: 'auto' }}
        textAlign={{ xs: 'center', md: 'left' }} // Center text on mobile
      >
        {/* Desktop Logo */}
        <MuiLink
          underline="none"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100); // delay to ensure navigation is done before scroll
          }}
          sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', pt: 3, cursor: 'pointer' }}
        >
          <img src="/Hm.png" width={100} alt="Logo" />
        </MuiLink>

        <Box mb={{ xs: 4, md: 0 }}>
          {/* Mobile Logo */}
          <MuiLink
            underline="none"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mb: 1, cursor: 'pointer' }}
          >
            <img src="/Hm.png" width={40} alt="Logo" />
          </MuiLink>


          <Typography fontWeight="600">NAVONMESHAK HOSTEDMINDS</Typography>
          <Typography fontWeight="600">TECHSOLUTIONS PVT LTD.</Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >


            <MuiLink
              href="https://www.facebook.com/hostedminds"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 35,
                height: 35,
                borderRadius: '4px',
                backgroundColor: '#1877F2',
                '&:hover': {
                  backgroundColor: '#145dbf',
                }
              }}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '1.5rem', color: '#FFFFFF' }} // white icon
              />
            </MuiLink>


            <MuiLink
              href="https://www.twitter.com/hostedminds"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 35,
                height: 35,
                borderRadius: '4px',
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#0d8ddb',
                }
              }}
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{ fontSize: '1.5rem', color: '#FFFFFF' }}
              />
            </MuiLink>


            <MuiLink
              href="https://www.youtube.com/channel/UCMMFpvruEVHe6VAggzb85sA"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 35,
                height: 35,
                borderRadius: '4px', // Use '50%' for a circle
                backgroundColor: '#FF0000',
                '&:hover': {
                  backgroundColor: '#cc0000', // darker red on hover (optional)
                }
              }}
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: '1.3rem', color: '#FFFFFF' }} // white triangle
              />
            </MuiLink>


            <MuiLink
              href="https://www.linkedin.com/company/hostedminds/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 35,
                height: 35,
                borderRadius: '4px',
                backgroundColor: '#0077B5',
                '&:hover': {
                  backgroundColor: '#005983',
                },
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem', color: '#FFFFFF' }} />
            </MuiLink>


            <MuiLink
              href="https://www.instagram.com/hostedminds/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 35,
                height: 35,
                borderRadius: '4px',
                backgroundColor: '#E1306C',
                '&:hover': {
                  backgroundColor: '#b22556',
                },
              }}
            >
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem', color: '#FFFFFF' }} />
            </MuiLink>

          </Stack>


          {/* Desktop copyright */}
          <Typography
            variant="caption"
            sx={{
              mt: 2,
              color: '#fff',
              display: { xs: 'none', md: 'block' },
            }}
          >
            2025 © All Rights Reserved HostedMinds
          </Typography>
        </Box>
      </Stack>


      {/* About & Services Section */}
      <Stack
        direction="row"
        spacing={{ xs: 3, md: 20 }}
        justifyContent="center"
        textAlign="left"
        mt={{ xs: 4, md: 3 }}
        sx={{ ml: { xs: 2, md: 20 } }}
      >
        <Stack spacing={1}>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/mission')}>Our Mission</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/privacy-policy')}>Privacy Policy</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/term')}>Terms & Conditions</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/shop')}>Shop</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/blog')}>Blog Page</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/faq')}>FAQ</Typography>
        </Stack>
      </Stack>

      {/* Mobile Copyright */}
      <Box mt={1} display={{ xs: 'block', md: 'none' }} width="100%">
        <Typography variant="caption" sx={{ color: '#fff', textAlign: 'center', width: '100%', ml: { xs: 2 } }}>
          2025 © All Rights Reserved HostedMinds
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
