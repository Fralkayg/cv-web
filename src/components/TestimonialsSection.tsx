import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="testimonials" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.testimonials} />

        <Grid container spacing={3}>
          {t.testimonials.map((testimonial, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6 }}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteRoundedIcon color="primary" sx={{ fontSize: 32, opacity: 0.5, mb: 1 }} />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2.5, fontStyle: 'italic', lineHeight: 1.7 }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36, fontSize: '0.9rem' }}>
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
