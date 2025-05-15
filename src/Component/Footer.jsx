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
        spacing={{ xs: 0, md: 15 }}
        alignItems={{ xs: 'center', md: 'flex-start' }}    
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        width={{ xs: '100%', md: 'auto' }}
        textAlign={{ xs: 'center', md: 'left' }} 
       
      >
        {/* Desktop Logo */}
        <MuiLink
          underline="none"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100); 
          }}
          sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', pt: 3, cursor: 'pointer' }}
        >
          <img src="/Hm.png" width={100} alt="Logo" />
        </MuiLink>

        <Box
          mb={{ xs: 4, md: 0 }}
          sx={{
            
            width: { xs: '100%', md: 'auto' },
            px: { xs: 0, md: 0 },
            mx: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Mobile Logo */}
          <MuiLink
            underline="none"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            sx={{
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'center',
              alignItems: 'center',            
              mb: 1,
              cursor: 'pointer',
              width: '100%',                    
             
            }}
          >
            <img src="/Hm.png" width={60} alt="Logo" />
          </MuiLink>


          <Typography fontWeight="600" fontSize={20}>
            NAVONMESHAK HOSTEDMINDS
          </Typography>
          <Typography fontWeight="600" fontSize={20}>
            TECHSOLUTIONS PVT LTD.
          </Typography>

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
                width: 40,
                height: 40,
                borderRadius: '4px',
                backgroundColor: '#1877F2',
                '&:hover': {
                  backgroundColor: '#145dbf',
                }
              }}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '1.5rem', color: '#FFFFFF' }} 
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
                width: 40,
                height: 40,
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
                width: 40,
                height: 40,
                borderRadius: '4px', // Use '50%' for a circle
                backgroundColor: '#FF0000',
                '&:hover': {
                  backgroundColor: '#cc0000',
                }
              }}
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: '1.3rem', color: '#FFFFFF' }}
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
                width: 40,
                height: 40,
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
                width: 40,
                height: 40,
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
            2025 © All Rights Reserved Hostedminds
          </Typography>
        </Box>
      </Stack>


      {/* About & Services Section */}
      <Stack
        direction="row"
        spacing={{ xs: 6, md: 20 }}
        justifyContent="center"
        textAlign="left"
        mb={{xs:2}}
        mt={{ xs: 4, md: 3 }}
        sx={{ ml: { xs: 0, md: 20 } }}
      >
        <Stack spacing={1}>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => { navigate('/about#mission'); }}>Our Mission</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/privacy-policy')}>Privacy Policy</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/term')}>Terms & Conditions</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/shop')}>Shop</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/insight')}>Insight</Typography>
          <Typography sx={{ cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: 'yellow', transform: 'scale(1.05)' } }} onClick={() => navigate('/faq')}>FAQ</Typography>
        </Stack>
      </Stack>

      {/* Mobile Copyright */}
      <Box mt={1} mb={-3} display={{ xs: 'block', md: 'none' }} width="100%">
        <Typography variant="caption" sx={{ color: '#fff', textAlign: 'center', width: '100%'}}>
          2025 © All Rights Reserved Hostedminds
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
