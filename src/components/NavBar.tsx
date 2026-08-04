import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import LanguageSwitch from './LanguageSwitch'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'
import { heroGradient } from '../theme'

export default function NavBar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const pdfHref = `${import.meta.env.BASE_URL}CV_EN.pdf`

  const navItems = [
    { href: '#summary', label: t.nav.summary },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.85),
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { xs: 2, sm: 3 } }}>
        <Avatar sx={{ background: heroGradient, fontWeight: 700, width: 36, height: 36 }}>
          {t.initials}
        </Avatar>
        <Typography
          variant="subtitle1"
          sx={{ ml: 1.5, fontWeight: 700, display: { xs: 'none', sm: 'block' } }}
        >
          {t.name}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          {navItems.map((item) => (
            <Button key={item.href} href={item.href} color="inherit">
              {item.label}
            </Button>
          ))}
        </Stack>

        <ThemeToggle />

        <LanguageSwitch />

        <Button
          variant="contained"
          startIcon={<DownloadRoundedIcon />}
          href={pdfHref}
          download
          sx={{ display: { xs: 'none', sm: 'inline-flex' }, ml: 2 }}
        >
          {t.hero.ctaDownload}
        </Button>

        <IconButton
          sx={{ display: { md: 'none' }, ml: 1 }}
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240, pt: 2 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.href} component="a" href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href={pdfHref} download>
              <ListItemText primary={t.hero.ctaDownload} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
