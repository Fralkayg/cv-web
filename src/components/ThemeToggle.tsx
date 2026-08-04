import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import { useColorMode } from '../context/ColorModeContext'

export default function ThemeToggle() {
  const { mode, toggleMode } = useColorMode()
  const isDark = mode === 'dark'

  return (
    <Tooltip title={isDark ? 'Light mode' : 'Dark mode'}>
      <IconButton onClick={toggleMode} color="inherit" aria-label="Toggle dark mode">
        {isDark ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  )
}
