import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function NowSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="now" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.now} />

        <Paper variant="outlined" sx={{ p: 3 }}>
          <Stack spacing={2}>
            {t.nowItems.map((item) => (
              <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <AutoAwesomeRoundedIcon color="secondary" fontSize="small" />
                <Typography variant="body1" color="text.secondary">
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
