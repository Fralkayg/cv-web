import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SocialLinks from './SocialLinks'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'common.white', py: 4 }}>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            © {year} {t.name}
          </Typography>
          <SocialLinks variant="dark" />
        </Stack>
      </Container>
    </Box>
  )
}
