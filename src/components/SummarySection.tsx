import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../context/LanguageContext'

export default function SummarySection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="summary" sx={{ py: { xs: 6, md: 9 } }}>
      <Container maxWidth="md">
        <SectionHeading title={t.sectionTitles.summary} />
        <Stack spacing={2.5}>
          {t.summary.map((paragraph, i) => (
            <Typography
              key={i}
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: '1.08rem', lineHeight: 1.8 }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
