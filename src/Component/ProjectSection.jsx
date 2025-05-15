import { Box, Grid, Typography } from '@mui/material'
import { Check } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function ProjectSection() {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <Box sx={{ px: 4, py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/Featured.jpg"
            alt="HostedMinds Team"
            sx={{
              width: '100%', maxWidth: 500,
              height: 300, borderRadius: 2
            }}
          />
        </Grid>

        {/* Right Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Why Choose
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Hostedminds?
          </Typography>



          <Grid container spacing={2}>
            {[
              "Innovation-Centric: We're not just service providers we are creators. Innovation drives everything we do.",
              'Hands-On Learning: We believe in experiential learning. Our education programs are built around real-world application.',
              'End-to-End Solutions: From concept to execution, we handle every stage of the tech lifecycle.',
              'Experienced Team: Our team consists of certified educators, developers, engineers, and domain experts.',
              'Customized Approach: We tailor our solutions and teaching methodologies based on our clients’ and learners’ unique needs.',
              "Affordable Excellence: Quality doesn't have to come with a hefty price tag. We deliver high-value services at competitive prices."
            ].map((item) => {
              const [title, ...rest] = item.split(':');
              return (
                <Grid item xs={12} key={item}>
                  <Box display="flex" alignItems="flex-start" gap={1}>
                    <Box sx={{ color: '#06b6d4', fontSize: '24px', mt: '4px' }}>
                      <Check />
                    </Box>
                    <Typography color="text.secondary">
                      <Box component="span" fontWeight="bold" display="inline">
                        {title}:
                      </Box>{' '}
                      {rest.join(':')}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

        </Grid>
      </Grid>

      {/* CountUp Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        textAlign="center"
        mt={4}
        ref={ref}
      >
        {[
          { label: 'Projects Served', value: 35, suffix: '+' },
          { label: 'Customer Satisfaction', value: 98, suffix: '%' },
          { label: 'Lean Team Efficiency', value: 5, suffix: 'x' },
          { label: 'Projects Delivered On Time', value: 100, suffix: '%' },
          { label: 'Customer Satisfaction', value: 98, suffix: '%' }
        ].map(({ label, value, suffix }) => (
          <Grid item xs={6} md={2} key={label} >
            <Typography variant="h3" fontWeight="bold" color="primary" component="div">
              {inView && (
                <span style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
                  <CountUp end={value} duration={2} separator="," />
                  <Typography variant="h3" component="span" color="primary" ml={0.5}>
                    {suffix}
                  </Typography>
                </span>
              )}
            </Typography>
            <Typography color="text.secondary" mt={1}>
              {label}
            </Typography>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
