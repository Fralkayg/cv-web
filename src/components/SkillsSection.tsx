import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function SkillsSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.skills} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                {t.sectionTitles.technicalSkills}
              </Typography>
              <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 1 }}>
                {t.technicalSkills.map((skill) => (
                  <Chip key={skill} label={skill} color="primary" variant="filled" size="small" />
                ))}
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                {t.sectionTitles.interpersonalSkills}
              </Typography>
              <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 1 }}>
                {t.interpersonalSkills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" size="small" />
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
