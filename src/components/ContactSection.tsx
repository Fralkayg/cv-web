import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import SocialLinks from './SocialLinks'
import { useLanguage } from '../context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 2.5 }}>
          {t.sectionTitles.contact}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: '1.08rem', lineHeight: 1.8, mb: 4 }}
        >
          {t.contactMessage}
        </Typography>

        <Stack spacing={2.5} sx={{ alignItems: 'center' }}>
          <SocialLinks />
          <Chip
            icon={<LocationOnRoundedIcon />}
            label={t.contact.location}
            variant="outlined"
            sx={{ bgcolor: 'background.paper' }}
          />

          <Box
            sx={{
              mt: 1,
              p: 1.5,
              bgcolor: '#ffffff',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}qr-cv.png`}
              alt={t.qrCaption}
              sx={{ width: 128, height: 128, display: 'block' }}
            />
          </Box>
          <Typography variant="caption" color="text.secondary">
            {t.qrCaption}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
