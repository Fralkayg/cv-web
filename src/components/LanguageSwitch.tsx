import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useLanguage } from '../context/LanguageContext'
import type { Locale } from '../data/content'

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage()

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      size="small"
      onChange={(_event, next: Locale | null) => {
        if (next) setLocale(next)
      }}
      aria-label="Language selector / Selector de idioma"
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="es" aria-label="Español">
        ES
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
