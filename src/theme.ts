import { createTheme, type PaletteMode } from '@mui/material/styles'

const shared = {
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Segoe UI", system-ui, Roboto, Helvetica, Arial, sans-serif',
    // Slightly above MUI's default (14) so body/caption text reads bigger
    // site-wide; every variant scales proportionally from this.
    fontSize: 15,
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: 'none' as const },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 22,
          paddingRight: 22,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
}

export function getTheme(mode: PaletteMode) {
  const isDark = mode === 'dark'

  return createTheme({
    ...shared,
    palette: {
      mode,
      primary: {
        main: '#12a3af',
        dark: isDark ? '#0e7c86' : '#0a5860',
        light: '#3f9aa3',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f2994a',
        dark: '#c9772f',
      },
      background: isDark
        ? { default: '#10171a', paper: '#182226' }
        : { default: '#f7f9fa', paper: '#ffffff' },
      text: isDark
        ? { primary: '#eef3f4', secondary: '#a3b3b8' }
        : { primary: '#1a2226', secondary: '#54626b' },
      divider: isDark ? 'rgba(238, 243, 244, 0.1)' : 'rgba(20, 40, 44, 0.09)',
    },
  })
}

export const heroGradient = 'linear-gradient(135deg, #0e7c86 0%, #12a3af 55%, #f2994a 130%)'
