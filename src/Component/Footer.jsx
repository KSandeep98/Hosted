import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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
                    href="#page-top"
                    underline="none"
                    sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', pt:3 }}
                >
                    <img src="/Hm.png" width={100} alt="Logo" />
                </MuiLink>

                <Box mb={{ xs: 4, md: 0 }}>
                    {/* Mobile Logo */}
                    <MuiLink
                        href="#page-top"
                        underline="none"
                        sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mb: 1 }}
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
      '&:hover svg': { color: '#FFFFFF' }
    }}
  >
    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.5rem' }} color="#1877F2" />
  </MuiLink>

  <MuiLink
    href="https://www.twitter.com/hostedminds"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      '&:hover svg': { color: '#FFFFFF' }
    }}
  >
    <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '1.5rem' }} color="#000000" />
  </MuiLink>

  <MuiLink
    href="https://www.youtube.com/channel/UCMMFpvruEVHe6VAggzb85sA"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      '&:hover svg': { color: '#FFFFFF' }
    }}
  >
    <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '1.5rem' }} color="#FF0000" />
  </MuiLink>

  <MuiLink
    href="https://www.linkedin.com/company/hostedminds/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      '&:hover svg': { color: '#FFFFFF' }
    }}
  >
    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '1.5rem' }} color="#0077B5" />
  </MuiLink>

  <MuiLink
    href="https://www.instagram.com/hostedminds/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      '&:hover svg': { color: '#FFFFFF' }
    }}
  >
    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5rem' }} color="#E1306C" />
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
                        2024 © All Rights Reserved HostedMinds
                    </Typography>
                </Box>
            </Stack>


            {/* About & Services Section */}
            <Stack
                direction="row"
                spacing={{ xs: 3, md: 20 }}
                justifyContent="center"
                textAlign="left"
                mt={{ xs: 4, md: 0 }}
                sx={{ ml: { xs: 2, md: 20 } }}
            >
                <Stack spacing={1}>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>About</Typography>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Our Mission</Typography>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Privacy Policy</Typography>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Terms & Conditions</Typography>
                </Stack>

                <Stack spacing={1}>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Services</Typography>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Shop</Typography>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Blog Page</Typography>
                    <Typography sx={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>FAQ</Typography>
                </Stack>
            </Stack>

            {/* Mobile Copyright */}
            <Box mt={1} display={{ xs: 'block', md: 'none' }} width="100%">
                <Typography variant="caption" sx={{ color: '#fff', textAlign: 'center', width: '100%', ml: { xs: 2 } }}>
                    2024 © All Rights Reserved HostedMinds
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
