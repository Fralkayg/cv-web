import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function EducationSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="education" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.education} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {t.education.map((edu) => (
                <Paper
                  key={`${edu.institution}-${edu.period}`}
                  variant="outlined"
                  sx={{ p: 2.5, display: 'flex', gap: 2, alignItems: 'flex-start' }}
                >
                  <SchoolRoundedIcon color="primary" sx={{ mt: 0.5 }} />
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {edu.period}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.degree}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper variant="outlined" sx={{ p: 2.5, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                {t.sectionTitles.certificates}
              </Typography>
              <Stack spacing={2}>
                {t.certificates.map((cert) => (
                  <Stack key={cert.name} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <WorkspacePremiumRoundedIcon color="primary" sx={{ mt: 0.3 }} fontSize="small" />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {cert.period}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
