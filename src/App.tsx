import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react'
import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HobbiesSection from './components/HobbiesSection'
import NavBar from './components/NavBar'
import NowSection from './components/NowSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import SummarySection from './components/SummarySection'
import TestimonialsSection from './components/TestimonialsSection'
import { useColorMode } from './context/ColorModeContext'
import { getTheme } from './theme'

export default function App() {
  const { mode } = useColorMode()
  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Hero />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <TestimonialsSection />
      <NowSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  )
}
