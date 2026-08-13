import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import SportsMmaRoundedIcon from '@mui/icons-material/SportsMmaRounded'
import SportsMotorsportsRoundedIcon from '@mui/icons-material/SportsMotorsportsRounded'
import SportsTennisRoundedIcon from '@mui/icons-material/SportsTennisRounded'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

// Matched by position to the hobbies arrays in src/data/en.ts / es.ts
// (Formula 1, UFC, Tennis, Traveling, Reading) — keep both in sync.
const HOBBY_ICONS = [
  SportsMotorsportsRoundedIcon,
  SportsMmaRoundedIcon,
  SportsTennisRoundedIcon,
  FlightTakeoffRoundedIcon,
  MenuBookRoundedIcon,
]

export default function HobbiesSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="hobbies" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.hobbies} />

        <Grid container spacing={2}>
          {t.hobbies.map((hobby, i) => {
            const Icon = HOBBY_ICONS[i] ?? SportsTennisRoundedIcon
            return (
              <Grid key={hobby} size={{ xs: 6, sm: 4, md: 2.4 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    textAlign: 'center',
                  }}
                >
                  <Icon color="primary" />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {hobby}
                  </Typography>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
