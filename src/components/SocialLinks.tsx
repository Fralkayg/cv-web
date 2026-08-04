import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useLanguage } from '../context/LanguageContext'

interface SocialLinksProps {
  variant?: 'light' | 'dark'
}

export default function SocialLinks({ variant = 'light' }: SocialLinksProps) {
  const { t } = useLanguage()
  const isDark = variant === 'dark'

  const buttonSx = {
    color: isDark ? 'common.white' : 'primary.main',
    border: '1px solid',
    borderColor: isDark ? 'rgba(255,255,255,0.35)' : 'divider',
    bgcolor: isDark ? 'transparent' : 'background.paper',
    transition: 'transform 0.15s ease, background-color 0.15s ease',
    '&:hover': {
      bgcolor: isDark ? 'rgba(255,255,255,0.12)' : 'primary.main',
      color: isDark ? 'common.white' : 'common.white',
      transform: 'translateY(-2px)',
    },
  }

  return (
    <Stack direction="row" spacing={1.5}>
      <Tooltip title={t.contact.emailLabel}>
        <IconButton
          component="a"
          href={`mailto:${t.contact.email}`}
          aria-label={t.contact.emailLabel}
          sx={buttonSx}
        >
          <EmailRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title={t.contact.linkedinLabel}>
        <IconButton
          component="a"
          href={t.contact.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t.contact.linkedinLabel}
          sx={buttonSx}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title={t.contact.githubLabel}>
        <IconButton
          component="a"
          href={t.contact.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t.contact.githubLabel}
          sx={buttonSx}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}
