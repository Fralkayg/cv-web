import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { useLanguage } from '../context/LanguageContext'
import { heroGradient } from '../theme'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <Box component="section" sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -200,
          right: -160,
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '33' : '26'} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: -260,
          left: -220,
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.secondary.main}${theme.palette.mode === 'dark' ? '26' : '1f'} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center', pt: { xs: 9, md: 13 }, pb: { xs: 7, md: 9 } }}>
        <Avatar
          sx={{
            width: 92,
            height: 92,
            mx: 'auto',
            mb: 3,
            fontSize: '1.9rem',
            fontWeight: 800,
            background: heroGradient,
            boxShadow: '0 12px 28px rgba(14, 124, 134, 0.35)',
          }}
        >
          {t.initials}
        </Avatar>

        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
          {t.hero.greeting}
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.3rem', sm: '2.9rem', md: '3.4rem' },
            mb: 1,
            background: heroGradient,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {t.name}
        </Typography>

        <Typography variant="h5" component="p" color="text.secondary" sx={{ fontWeight: 600, mb: 2.5 }}>
          {t.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 540, mx: 'auto', mb: 4, fontSize: '1.08rem', lineHeight: 1.7 }}
        >
          {t.hero.tagline}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Button variant="contained" size="large" startIcon={<CodeRoundedIcon />} href="#experience">
            {t.nav.viewExperience}
          </Button>
          <Button variant="outlined" size="large" startIcon={<SendRoundedIcon />} href="#contact">
            {t.hero.ctaContact}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
