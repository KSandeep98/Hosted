import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7)); }
`;

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const Partners = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imageWidth = isMobile ? 120 : 250;
  const imageHeight = isMobile ? 60 : 100;

  return (
    <Box sx={{ mb: '40px', px: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: 'center', width: '100%' }}
      >
        Our Partners
      </Typography>

      <Box
        sx={{
          background: '#fff',
          boxShadow: '0 10px 20px -5px rgba(0,0,0,.125)',
          height: imageHeight,
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          m: 'auto',
          '::before': {
            content: '""',
            height: imageHeight,
            width: '50px',
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          },
          '::after': {
            content: '""',
            height: imageHeight,
            width: '50px',
            position: 'absolute',
            zIndex: 2,
            top: 0,
            right: 0,
            background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: `calc(${imageWidth}px * 14)`,
            animation: `${scroll} 40s linear infinite`,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <Box
              key={index}
              sx={{
                width: imageWidth,
                height: imageHeight,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={src} alt={`slide-${index}`} width={imageWidth} height={imageHeight} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
 