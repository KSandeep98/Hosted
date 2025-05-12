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
            alt="Alpha Developer Team"
            sx={{ width: '100%',  maxWidth: 500,
                height: 300, borderRadius: 2 }}
          />
        </Grid>

        {/* Right Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            We Are
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            HostedMinds
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores in, incidunt velit laboriosam vitae iste eum fuga rem molestias atque cum aliquam officia error temporibus laudantium debitis asperiores exercitationem.
          </Typography>

          <Grid container spacing={2}>
            {['Quality', 'Easy Implementation', 'Ongoing Support', 'Client-Centric Approach'].map((item) => (
              <Grid item xs={6} key={item}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Check color="#06b6d4" />
                  <Typography color="text.secondary">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* CountUp Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        textAlign="center"
        mt={8}
        ref={ref}
      >
        {[
          { label: 'Projects', value: 15000 },
          { label: 'Members', value: 30000 },
          { label: 'Clients', value: 50000 },
          { label: 'Deployments', value: 44000 }
        ].map(({ label, value }) => (
          <Grid item xs={6} md={3} key={label}>
            <Typography variant="h3" fontWeight="bold" color="primary">
              {inView && <CountUp end={value} duration={2} separator="," />}
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
